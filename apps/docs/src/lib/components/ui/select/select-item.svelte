<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Select as SelectPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends SelectPrimitive.ItemProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<SelectPrimitive.Item
	class={cn(
		"relative flex w-full cursor-pointer select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-glass-light focus:bg-glass-light data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...rest}
>
	<span class="absolute left-2 flex h-4 w-4 items-center justify-center">
		{#snippet children({ selected })}
			{#if selected}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
			{/if}
		{/snippet}
	</span>
	{#if children}
		{@render children()}
	{/if}
</SelectPrimitive.Item>
