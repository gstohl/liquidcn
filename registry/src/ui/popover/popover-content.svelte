<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Popover as PopoverPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends PopoverPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, sideOffset = 4, ...rest }: Props = $props();
</script>

<PopoverPrimitive.Portal>
	<PopoverPrimitive.Content
		{sideOffset}
		class={cn(
			"z-50 w-72 rounded-xl glass-heavy p-4 shadow-glass-lg outline-none data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</PopoverPrimitive.Content>
</PopoverPrimitive.Portal>
