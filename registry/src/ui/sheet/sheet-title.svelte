<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends DialogPrimitive.TitleProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Title class={cn("text-lg font-semibold text-foreground", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</DialogPrimitive.Title>
