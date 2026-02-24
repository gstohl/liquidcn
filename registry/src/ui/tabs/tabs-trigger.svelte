<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Tabs as TabsPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	class={cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-glass-heavy data-[state=active]:shadow-glass-sm data-[state=active]:text-foreground text-muted-foreground hover:text-foreground cursor-pointer",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</TabsPrimitive.Trigger>
