<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { LinkPreview as HoverCardPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends HoverCardPrimitive.TriggerProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<HoverCardPrimitive.Trigger class={cn(className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</HoverCardPrimitive.Trigger>
