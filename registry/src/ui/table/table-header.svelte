<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLTableSectionElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<thead class={cn("[&_tr]:border-b [&_tr]:border-glass-border", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</thead>
