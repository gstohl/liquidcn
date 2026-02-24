<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Collapsible as CollapsiblePrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends CollapsiblePrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Content
	class={cn("overflow-hidden data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out", className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</CollapsiblePrimitive.Content>
