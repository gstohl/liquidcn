<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Popover as PopoverPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends PopoverPrimitive.TriggerProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<PopoverPrimitive.Trigger class={cn(className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</PopoverPrimitive.Trigger>
