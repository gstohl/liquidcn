<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends ContextMenuPrimitive.TriggerProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Trigger class={cn(className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</ContextMenuPrimitive.Trigger>
