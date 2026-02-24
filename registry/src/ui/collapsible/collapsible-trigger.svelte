<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Collapsible as CollapsiblePrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends CollapsiblePrimitive.TriggerProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Trigger class={cn(className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</CollapsiblePrimitive.Trigger>
