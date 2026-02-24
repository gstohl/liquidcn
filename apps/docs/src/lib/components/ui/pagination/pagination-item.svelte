<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface Props extends HTMLButtonAttributes {
		class?: string;
		children?: Snippet;
		active?: boolean;
	}

	let { class: className, children, active = false, ...rest }: Props = $props();
</script>

<li>
	<button
		class={cn(
			"inline-flex items-center justify-center rounded-lg text-sm font-medium h-10 w-10 transition-all duration-200 cursor-pointer",
			active
				? "bg-primary text-primary-foreground shadow-glass"
				: "glass hover:shadow-glass",
			className
		)}
		aria-current={active ? "page" : undefined}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</button>
</li>
