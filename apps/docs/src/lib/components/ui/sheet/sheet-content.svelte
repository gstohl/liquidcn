<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";
	import SheetOverlay from "./sheet-overlay.svelte";
	import type { Snippet } from "svelte";

	interface Props extends DialogPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
		side?: "left" | "right" | "top" | "bottom";
	}

	let { class: className, children, side = "right", ...rest }: Props = $props();

	const sideStyles = {
		right: "inset-y-0 right-0 h-full w-3/4 max-w-sm data-[state=open]:animate-sheet-in-right data-[state=closed]:animate-sheet-out-right",
		left: "inset-y-0 left-0 h-full w-3/4 max-w-sm data-[state=open]:animate-sheet-in-left data-[state=closed]:animate-sheet-out-left",
		top: "inset-x-0 top-0 w-full h-auto max-h-[80vh] data-[state=open]:animate-sheet-in-top data-[state=closed]:animate-sheet-out-top",
		bottom: "inset-x-0 bottom-0 w-full h-auto max-h-[80vh] data-[state=open]:animate-sheet-in-bottom data-[state=closed]:animate-sheet-out-bottom",
	};
</script>

<DialogPrimitive.Portal>
	<SheetOverlay />
	<DialogPrimitive.Content
		class={cn(
			"fixed z-50 glass-heavy p-6 shadow-glass-xl",
			sideStyles[side],
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
		<DialogPrimitive.Close
			class="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
