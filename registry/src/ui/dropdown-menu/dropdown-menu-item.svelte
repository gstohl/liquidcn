<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends DropdownMenuPrimitive.ItemProps {
		class?: string;
		children?: Snippet;
		inset?: boolean;
	}

	let { class: className, children, inset = false, ...rest }: Props = $props();
</script>

<DropdownMenuPrimitive.Item
	class={cn(
		"relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors hover:bg-glass-light focus:bg-glass-light data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		inset && "pl-8",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</DropdownMenuPrimitive.Item>
