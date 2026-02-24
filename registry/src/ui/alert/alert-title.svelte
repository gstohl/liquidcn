<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<h5 class={cn("mb-1 font-medium leading-none tracking-tight", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</h5>
