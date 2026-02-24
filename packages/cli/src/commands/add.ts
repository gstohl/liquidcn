import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import chalk from "chalk";
import prompts from "prompts";
import ora from "ora";

interface RegistryFile {
	path: string;
	type: string;
	content: string;
	target: string;
}

interface RegistryItem {
	name: string;
	title: string;
	description: string;
	dependencies: string[];
	registryDependencies: string[];
	files: RegistryFile[];
}

interface Config {
	aliases: {
		ui: string;
		utils: string;
		components: string;
		lib: string;
	};
	registry: string;
}

function resolveAlias(alias: string, cwd: string): string {
	return alias.replace("$lib", join(cwd, "src", "lib"));
}

async function fetchComponent(registry: string, name: string): Promise<RegistryItem> {
	// Try local file first (for development)
	const localPath = join(process.cwd(), "..", "..", "apps", "docs", "static", "r", `${name}.json`);
	if (existsSync(localPath)) {
		return JSON.parse(readFileSync(localPath, "utf-8"));
	}

	// Try the registry URL
	const url = `${registry}/${name}.json`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Component "${name}" not found in registry`);
	}
	return response.json();
}

async function fetchIndex(registry: string): Promise<{ items: { name: string; title: string; description: string }[] }> {
	const localPath = join(process.cwd(), "..", "..", "apps", "docs", "static", "r", "index.json");
	if (existsSync(localPath)) {
		return JSON.parse(readFileSync(localPath, "utf-8"));
	}

	const url = `${registry}/index.json`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Failed to fetch registry index");
	}
	return response.json();
}

export async function add(
	componentNames: string[],
	options: { yes: boolean; overwrite: boolean; all: boolean }
) {
	const cwd = process.cwd();
	const configPath = join(cwd, "components.json");

	if (!existsSync(configPath)) {
		console.log(chalk.red("\n  No components.json found. Run `npx liquidcn init` first.\n"));
		process.exit(1);
	}

	const config: Config = JSON.parse(readFileSync(configPath, "utf-8"));

	// Handle --all flag
	if (options.all) {
		const index = await fetchIndex(config.registry);
		componentNames = index.items.map((i) => i.name);
	}

	if (!componentNames || componentNames.length === 0) {
		// Interactive selection
		const index = await fetchIndex(config.registry);
		const { selected } = await prompts({
			type: "multiselect",
			name: "selected",
			message: "Which components would you like to add?",
			choices: index.items.map((item) => ({
				title: item.title,
				description: item.description,
				value: item.name,
			})),
		});

		if (!selected || selected.length === 0) {
			console.log(chalk.yellow("  No components selected."));
			return;
		}
		componentNames = selected;
	}

	const allDeps = new Set<string>();

	for (const name of componentNames) {
		const spinner = ora(`Adding ${name}...`).start();

		try {
			const component = await fetchComponent(config.registry, name);

			// Track npm dependencies
			for (const dep of component.dependencies) {
				allDeps.add(dep);
			}

			// Write component files
			for (const file of component.files) {
				const targetDir = resolveAlias(config.aliases.ui, cwd);
				const targetPath = join(targetDir, file.path.replace("ui/", ""));

				// Transform imports
				let content = file.content;
				content = content.replace(
					/\$lib\/utils\/cn/g,
					`${config.aliases.utils}/cn`
				);

				// Check for existing file
				if (existsSync(targetPath) && !options.overwrite) {
					if (!options.yes) {
						spinner.stop();
						const { overwrite } = await prompts({
							type: "confirm",
							name: "overwrite",
							message: `${file.path} already exists. Overwrite?`,
							initial: false,
						});
						if (!overwrite) continue;
						spinner.start(`Adding ${name}...`);
					} else {
						continue;
					}
				}

				mkdirSync(dirname(targetPath), { recursive: true });
				writeFileSync(targetPath, content);
			}

			spinner.succeed(`Added ${chalk.bold(component.title)}`);
		} catch (error: any) {
			spinner.fail(`Failed to add ${name}: ${error.message}`);
		}
	}

	// Report dependencies to install
	if (allDeps.size > 0) {
		const depsArray = Array.from(allDeps);
		console.log(
			chalk.dim(`\n  Dependencies needed: ${depsArray.join(", ")}`)
		);
		console.log(chalk.dim(`  Run: npm install ${depsArray.join(" ")}\n`));
	}
}
