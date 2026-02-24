<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<div class={cn("text-sm [&_p]:leading-relaxed", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</div>
