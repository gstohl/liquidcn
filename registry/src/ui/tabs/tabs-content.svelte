<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Tabs as TabsPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: TabsPrimitive.ContentProps = $props();
</script>

<TabsPrimitive.Content
	class={cn(
		"mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</TabsPrimitive.Content>
