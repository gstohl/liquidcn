import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";

const ROOT = dirname(dirname(import.meta.path));
const REGISTRY_DIR = join(ROOT, "registry");
const REGISTRY_SRC = join(REGISTRY_DIR, "src");
const OUTPUT_DIR = join(ROOT, "apps/docs/static/r");

// Read registry.json
const registry = JSON.parse(
	readFileSync(join(REGISTRY_DIR, "registry.json"), "utf-8")
);

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

// Build each component's registry item JSON
for (const item of registry.items) {
	const registryItem = {
		...item,
		files: item.files.map((file: { path: string; type: string }) => {
			const filePath = join(REGISTRY_SRC, file.path);
			const content = readFileSync(filePath, "utf-8");
			return {
				...file,
				content,
				target: `components/${file.path}`,
			};
		}),
	};

	const outputPath = join(OUTPUT_DIR, `${item.name}.json`);
	writeFileSync(outputPath, JSON.stringify(registryItem, null, 2));
	console.log(`  Built: ${item.name}.json`);
}

// Write the index registry
const indexRegistry = {
	$schema: "https://ui.shadcn.com/schema/registry.json",
	name: registry.name,
	homepage: registry.homepage,
	items: registry.items.map((item: any) => ({
		name: item.name,
		type: item.type,
		title: item.title,
		description: item.description,
		dependencies: item.dependencies,
		registryDependencies: item.registryDependencies,
	})),
};

writeFileSync(join(OUTPUT_DIR, "index.json"), JSON.stringify(indexRegistry, null, 2));
console.log(`  Built: index.json`);
console.log(`\nRegistry built with ${registry.items.length} components.`);
