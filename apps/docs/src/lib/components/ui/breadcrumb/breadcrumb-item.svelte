<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLLiAttributes } from "svelte/elements";

	interface Props extends HTMLLiAttributes {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<li class={cn("inline-flex items-center gap-1.5", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</li>
