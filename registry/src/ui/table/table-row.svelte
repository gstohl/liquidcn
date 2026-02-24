<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLTableRowElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<tr class={cn("border-b border-glass-border transition-colors hover:bg-white/5", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</tr>
