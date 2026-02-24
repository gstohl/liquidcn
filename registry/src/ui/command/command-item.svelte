<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends CommandPrimitive.ItemProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.Item
	class={cn(
		"relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors data-[selected]:bg-glass-light data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</CommandPrimitive.Item>
