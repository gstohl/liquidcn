<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props extends CommandPrimitive.EmptyProps {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.Empty class={cn("py-6 text-center text-sm text-muted-foreground", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</CommandPrimitive.Empty>
