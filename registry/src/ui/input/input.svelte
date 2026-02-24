<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLInputAttributes } from "svelte/elements";

	interface Props extends HTMLInputAttributes {
		class?: string;
	}

	let { class: className, type = "text", ...rest }: Props = $props();
</script>

<input
	{type}
	class={cn(
		"flex h-10 w-full rounded-lg bg-glass-light px-3 py-2 text-sm backdrop-blur-sm border border-glass-border shadow-glass-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent focus:bg-glass disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...rest}
/>
