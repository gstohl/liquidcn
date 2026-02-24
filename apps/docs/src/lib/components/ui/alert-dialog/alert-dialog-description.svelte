<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends AlertDialogPrimitive.DescriptionProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<AlertDialogPrimitive.Description class={cn("text-sm text-muted-foreground", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</AlertDialogPrimitive.Description>
