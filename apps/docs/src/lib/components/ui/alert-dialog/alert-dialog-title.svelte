<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends AlertDialogPrimitive.TitleProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<AlertDialogPrimitive.Title class={cn("text-lg font-semibold", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</AlertDialogPrimitive.Title>
