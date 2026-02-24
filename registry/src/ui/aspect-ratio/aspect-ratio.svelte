<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { AspectRatio as AspectRatioPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends AspectRatioPrimitive.RootProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<AspectRatioPrimitive.Root class={cn(className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</AspectRatioPrimitive.Root>
