<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLTableAttributes } from "svelte/elements";

	interface Props extends HTMLTableAttributes {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<div class="relative w-full overflow-auto rounded-xl glass shadow-glass-lg">
	<table class={cn("w-full caption-bottom text-sm", className)} {...rest}>
		{#if children}
			{@render children()}
		{/if}
	</table>
</div>
