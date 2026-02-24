<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Select as SelectPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends SelectPrimitive.ContentProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, sideOffset = 4, ...rest }: Props = $props();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content
		{sideOffset}
		class={cn(
			"z-50 min-w-[8rem] overflow-hidden rounded-xl glass-heavy p-1 shadow-glass-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
			className
		)}
		{...rest}
	>
		<SelectPrimitive.Viewport>
			{#if children}
				{@render children()}
			{/if}
		</SelectPrimitive.Viewport>
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>
