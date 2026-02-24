<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends CommandPrimitive.GroupProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.Group
	class={cn(
		"overflow-hidden p-1 text-foreground [&_[data-command-group-heading]]:px-2 [&_[data-command-group-heading]]:py-1.5 [&_[data-command-group-heading]]:text-xs [&_[data-command-group-heading]]:font-medium [&_[data-command-group-heading]]:text-muted-foreground",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</CommandPrimitive.Group>
