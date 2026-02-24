<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends ScrollAreaPrimitive.RootProps {
		class?: string;
		children?: Snippet;
		orientation?: "vertical" | "horizontal";
	}

	let { class: className, children, orientation = "vertical", ...rest }: Props = $props();
</script>

<ScrollAreaPrimitive.Root class={cn("relative overflow-hidden", className)} {...rest}>
	<ScrollAreaPrimitive.Viewport class="h-full w-full rounded-[inherit]">
		{#if children}
			{@render children()}
		{/if}
	</ScrollAreaPrimitive.Viewport>
	<ScrollAreaPrimitive.Scrollbar
		orientation={orientation}
		class={cn(
			"flex touch-none select-none transition-colors",
			orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
			orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px"
		)}
	>
		<ScrollAreaPrimitive.Thumb class="relative flex-1 rounded-full bg-glass-border-strong" />
	</ScrollAreaPrimitive.Scrollbar>
</ScrollAreaPrimitive.Root>
