<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends AlertDialogPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<AlertDialogPrimitive.Portal>
	<AlertDialogPrimitive.Overlay
		class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
	/>
	<AlertDialogPrimitive.Content
		class={cn(
			"fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 glass-heavy rounded-2xl p-6 shadow-glass-xl data-[state=open]:animate-glass-in data-[state=closed]:animate-glass-out",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</AlertDialogPrimitive.Content>
</AlertDialogPrimitive.Portal>
