<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends CommandPrimitive.ListProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.List
	class={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</CommandPrimitive.List>
