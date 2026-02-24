<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends AlertDialogPrimitive.ActionProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<AlertDialogPrimitive.Action
	class={cn(
		"inline-flex items-center justify-center rounded-lg text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground shadow-glass hover:opacity-90 transition-all duration-200 active:scale-[0.98] cursor-pointer",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</AlertDialogPrimitive.Action>
