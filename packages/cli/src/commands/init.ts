import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import prompts from "prompts";

const DEFAULT_CONFIG = {
	$schema: "https://github.com/gstohl/liquidcn",
	tailwind: {
		css: "./src/app.css",
	},
	aliases: {
		components: "$lib/components",
		utils: "$lib/utils",
		ui: "$lib/components/ui",
		lib: "$lib",
	},
	registry: "https://raw.githubusercontent.com/gstohl/liquidcn/main/apps/docs/static/r",
};

export async function init() {
	const cwd = process.cwd();
	const configPath = join(cwd, "components.json");

	console.log(chalk.bold("\n  Initializing liquidcn...\n"));

	// Check if already initialized
	if (existsSync(configPath)) {
		const { overwrite } = await prompts({
			type: "confirm",
			name: "overwrite",
			message: "components.json already exists. Overwrite?",
			initial: false,
		});
		if (!overwrite) {
			console.log(chalk.yellow("  Aborted."));
			return;
		}
	}

	// Check for SvelteKit project
	const packageJsonPath = join(cwd, "package.json");
	if (!existsSync(packageJsonPath)) {
		console.log(chalk.red("  No package.json found. Are you in a SvelteKit project?"));
		process.exit(1);
	}

	const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
	const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
	if (!deps["@sveltejs/kit"] && !deps["svelte"]) {
		console.log(chalk.red("  This doesn't look like a SvelteKit project."));
		process.exit(1);
	}

	// Ask for CSS path
	const { cssPath } = await prompts({
		type: "text",
		name: "cssPath",
		message: "Where is your global CSS file?",
		initial: "./src/app.css",
	});

	const config = {
		...DEFAULT_CONFIG,
		tailwind: { css: cssPath || "./src/app.css" },
	};

	// Write config
	writeFileSync(configPath, JSON.stringify(config, null, 2));
	console.log(chalk.green("  Created components.json"));

	// Ensure utils directory exists and create cn.ts
	const utilsDir = join(cwd, "src", "lib", "utils");
	mkdirSync(utilsDir, { recursive: true });

	const cnPath = join(utilsDir, "cn.ts");
	if (!existsSync(cnPath)) {
		writeFileSync(
			cnPath,
			`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
\treturn twMerge(clsx(inputs));
}
`
		);
		console.log(chalk.green("  Created src/lib/utils/cn.ts"));
	}

	// Ensure ui directory exists
	const uiDir = join(cwd, "src", "lib", "components", "ui");
	mkdirSync(uiDir, { recursive: true });
	console.log(chalk.green("  Created src/lib/components/ui/"));

	// Inject glass design tokens into CSS
	const resolvedCssPath = join(cwd, cssPath || "./src/app.css");
	if (existsSync(resolvedCssPath)) {
		const existingCss = readFileSync(resolvedCssPath, "utf-8");
		if (!existingCss.includes("--blur-glass")) {
			const glassTokens = `
/* ── Liquid Glass Design Tokens ── */
@theme {
\t--blur-glass-sm: 16px;
\t--blur-glass: 24px;
\t--blur-glass-lg: 40px;

\t--radius-sm: 6px;
\t--radius-md: 10px;
\t--radius-lg: 14px;
\t--radius-xl: 20px;
\t--radius-full: 9999px;

\t--color-glass: oklch(0.98 0 0 / 0.12);
\t--color-glass-heavy: oklch(0.98 0 0 / 0.18);
\t--color-glass-light: oklch(0.98 0 0 / 0.08);
\t--color-glass-border: oklch(0.98 0 0 / 0.3);
\t--color-glass-border-strong: oklch(0.98 0 0 / 0.45);

\t--shadow-glass-sm: 0 2px 8px oklch(0 0 0 / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.15);
\t--shadow-glass: 0 4px 24px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08), inset 0 1px 0 oklch(1 0 0 / 0.2);
\t--shadow-glass-lg: 0 8px 40px oklch(0 0 0 / 0.15), 0 2px 4px oklch(0 0 0 / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.25);
\t--shadow-glass-xl: 0 16px 56px oklch(0 0 0 / 0.2), 0 4px 8px oklch(0 0 0 / 0.12), inset 0 1px 0 oklch(1 0 0 / 0.3);
}

@utility glass {
\tbackground: var(--color-glass);
\tbackdrop-filter: blur(var(--blur-glass)) saturate(1.4);
\t-webkit-backdrop-filter: blur(var(--blur-glass)) saturate(1.4);
\tborder: 1px solid var(--color-glass-border);
\tbox-shadow: var(--shadow-glass);
}

@utility glass-heavy {
\tbackground: var(--color-glass-heavy);
\tbackdrop-filter: blur(var(--blur-glass-lg)) saturate(1.6);
\t-webkit-backdrop-filter: blur(var(--blur-glass-lg)) saturate(1.6);
\tborder: 1px solid var(--color-glass-border-strong);
\tbox-shadow: var(--shadow-glass-lg);
}

@utility glass-light {
\tbackground: var(--color-glass-light);
\tbackdrop-filter: blur(var(--blur-glass-sm)) saturate(1.2);
\t-webkit-backdrop-filter: blur(var(--blur-glass-sm)) saturate(1.2);
\tborder: 1px solid var(--color-glass-border);
\tbox-shadow: var(--shadow-glass-sm);
}
`;
			writeFileSync(resolvedCssPath, existingCss + glassTokens);
			console.log(chalk.green("  Injected glass design tokens into " + (cssPath || "./src/app.css")));
		}
	}

	// Check for required dependencies
	const required = ["clsx", "tailwind-merge", "tailwindcss", "@tailwindcss/vite"];
	const missing = required.filter((dep) => !deps[dep]);

	if (missing.length > 0) {
		console.log(chalk.yellow(`\n  Missing dependencies: ${missing.join(", ")}`));
		console.log(chalk.dim(`  Run: npm install ${missing.join(" ")}\n`));
	}

	console.log(chalk.green("\n  liquidcn initialized successfully!"));
	console.log(chalk.dim("  Run `npx @gstohl/liquidcn add button` to add your first component.\n"));
}
