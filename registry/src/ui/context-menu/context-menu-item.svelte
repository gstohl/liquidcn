<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends ContextMenuPrimitive.ItemProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Item
	class={cn(
		"relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors hover:bg-glass-light focus:bg-glass-light data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</ContextMenuPrimitive.Item>
