#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";
import { list } from "./commands/list.js";

const program = new Command();

program
	.name("liquidcn")
	.description("Add liquid glass components to your SvelteKit project")
	.version("0.0.1");

program
	.command("init")
	.description("Initialize liquidcn in your SvelteKit project")
	.action(init);

program
	.command("add")
	.description("Add a component to your project")
	.argument("[components...]", "Components to add")
	.option("-y, --yes", "Skip confirmation", false)
	.option("--overwrite", "Overwrite existing files", false)
	.option("-a, --all", "Add all components", false)
	.action(add);

program
	.command("list")
	.description("List all available components")
	.action(list);

program.parse();
