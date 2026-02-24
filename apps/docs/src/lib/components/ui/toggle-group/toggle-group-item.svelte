<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends ToggleGroupPrimitive.ItemProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<ToggleGroupPrimitive.Item
	class={cn(
		"inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 glass hover:shadow-glass h-10 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground cursor-pointer",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</ToggleGroupPrimitive.Item>
