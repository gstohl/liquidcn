<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Tooltip as TooltipPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends TooltipPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, sideOffset = 4, ...rest }: Props = $props();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content
		{sideOffset}
		class={cn(
			"z-50 overflow-hidden rounded-lg glass-heavy px-3 py-1.5 text-sm shadow-glass animate-slide-in",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
