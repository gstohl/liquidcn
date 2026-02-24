<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";
	import DialogOverlay from "./dialog-overlay.svelte";
	import type { Snippet } from "svelte";

	interface Props extends DialogPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Portal>
	<DialogOverlay />
	<DialogPrimitive.Content
		class={cn(
			"fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 glass-heavy rounded-2xl p-6 shadow-glass-xl data-[state=open]:animate-glass-in data-[state=closed]:animate-glass-out",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
