<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	interface Props extends HTMLTextareaAttributes {
		class?: string;
		value?: string;
	}

	let { class: className, value = $bindable(""), ...rest }: Props = $props();
</script>

<textarea
	bind:value
	class={cn(
		"flex min-h-[80px] w-full rounded-lg bg-glass-light px-3 py-2 text-sm backdrop-blur-sm border border-glass-border shadow-glass-sm transition-all duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent focus:bg-glass disabled:cursor-not-allowed disabled:opacity-50 resize-y",
		className
	)}
	{...rest}
/>
