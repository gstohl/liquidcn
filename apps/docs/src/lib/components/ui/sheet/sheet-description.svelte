<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends DialogPrimitive.DescriptionProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Description class={cn("text-sm text-muted-foreground", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</DialogPrimitive.Description>
