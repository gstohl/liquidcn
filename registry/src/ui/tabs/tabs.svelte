<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Tabs as TabsPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: TabsPrimitive.RootProps = $props();
</script>

<TabsPrimitive.Root class={cn("", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</TabsPrimitive.Root>
