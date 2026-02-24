<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends DialogPrimitive.CloseProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Close
	class={cn(
		"absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-glass-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		<span class="sr-only">Close</span>
	{/if}
</DialogPrimitive.Close>
