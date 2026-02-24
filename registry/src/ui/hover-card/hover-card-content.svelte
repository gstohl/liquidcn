<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { LinkPreview as HoverCardPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends HoverCardPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, sideOffset = 4, ...rest }: Props = $props();
</script>

<HoverCardPrimitive.Content
	{sideOffset}
	class={cn(
		"z-50 w-64 rounded-xl glass-heavy p-4 shadow-glass-lg outline-none data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</HoverCardPrimitive.Content>
