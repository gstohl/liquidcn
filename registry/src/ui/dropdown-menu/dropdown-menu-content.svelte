<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends DropdownMenuPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, sideOffset = 4, ...rest }: Props = $props();
</script>

<DropdownMenuPrimitive.Portal>
	<DropdownMenuPrimitive.Content
		{sideOffset}
		class={cn(
			"z-50 min-w-[8rem] overflow-hidden rounded-xl glass-heavy p-1 shadow-glass-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</DropdownMenuPrimitive.Content>
</DropdownMenuPrimitive.Portal>
