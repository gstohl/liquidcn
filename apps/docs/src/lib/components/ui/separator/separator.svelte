<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: "horizontal" | "vertical";
		class?: string;
	}

	let { orientation = "horizontal", class: className, ...rest }: Props = $props();
</script>

<div
	role="separator"
	aria-orientation={orientation}
	class={cn(
		"shrink-0 bg-glass-border",
		orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
		className
	)}
	{...rest}
/>
