<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Select as SelectPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends SelectPrimitive.TriggerProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<SelectPrimitive.Trigger
	class={cn(
		"flex h-10 w-full items-center justify-between rounded-lg glass px-3 py-2 text-sm shadow-glass-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer [&>span]:line-clamp-1",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<span class="text-muted-foreground">Select...</span>
	{/if}
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 opacity-50"><path d="m6 9 6 6 6-6"/></svg>
</SelectPrimitive.Trigger>
