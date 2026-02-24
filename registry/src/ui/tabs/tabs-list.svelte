<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Tabs as TabsPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List
	class={cn(
		"inline-flex h-10 items-center justify-center rounded-xl glass p-1 gap-1",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</TabsPrimitive.List>
