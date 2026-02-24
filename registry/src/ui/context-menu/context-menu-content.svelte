<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends ContextMenuPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Portal>
	<ContextMenuPrimitive.Content
		class={cn(
			"z-50 min-w-[8rem] overflow-hidden rounded-xl glass-heavy p-1 shadow-glass-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</ContextMenuPrimitive.Content>
</ContextMenuPrimitive.Portal>
