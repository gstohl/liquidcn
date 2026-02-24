<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children }: Props = $props();
</script>

<span role="link" aria-disabled="true" aria-current="page" class={cn("font-normal text-foreground", className)}>
	{#if children}
		{@render children()}
	{/if}
</span>
