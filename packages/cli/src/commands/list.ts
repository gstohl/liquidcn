import { existsSync, readFileSync } from "fs";
import { join } from "path";
import chalk from "chalk";

export async function list() {
	const cwd = process.cwd();
	const configPath = join(cwd, "components.json");

	let registry = "https://raw.githubusercontent.com/gstohl/liquidcn/main/apps/docs/static/r";

	if (existsSync(configPath)) {
		const config = JSON.parse(readFileSync(configPath, "utf-8"));
		registry = config.registry || registry;
	}

	// Try local first
	const localPath = join(cwd, "..", "..", "apps", "docs", "static", "r", "index.json");
	let items;

	if (existsSync(localPath)) {
		const data = JSON.parse(readFileSync(localPath, "utf-8"));
		items = data.items;
	} else {
		try {
			const response = await fetch(`${registry}/index.json`);
			const data = await response.json();
			items = data.items;
		} catch {
			console.log(chalk.red("\n  Failed to fetch component list.\n"));
			process.exit(1);
		}
	}

	console.log(chalk.bold("\n  Available components:\n"));
	for (const item of items) {
		console.log(`  ${chalk.cyan(item.name.padEnd(20))} ${chalk.dim(item.description)}`);
	}
	console.log(chalk.dim(`\n  Run \`npx liquid-cn add <component>\` to install.\n`));
}
