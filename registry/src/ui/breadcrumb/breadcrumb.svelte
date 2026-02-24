<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<nav aria-label="breadcrumb" class={cn(className)} {...rest}>
	<ol class="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
		{#if children}
			{@render children()}
		{/if}
	</ol>
</nav>
