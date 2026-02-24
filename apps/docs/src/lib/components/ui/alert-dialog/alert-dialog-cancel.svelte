<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends AlertDialogPrimitive.CancelProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<AlertDialogPrimitive.Cancel
	class={cn(
		"inline-flex items-center justify-center rounded-lg text-sm font-medium h-10 px-4 py-2 glass hover:shadow-glass transition-all duration-200 active:scale-[0.98] cursor-pointer",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</AlertDialogPrimitive.Cancel>
