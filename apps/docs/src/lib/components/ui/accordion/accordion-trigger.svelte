<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: AccordionPrimitive.TriggerProps = $props();
</script>

<AccordionPrimitive.Header class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"flex flex-1 items-center justify-between py-4 px-4 font-medium transition-all hover:bg-glass-light cursor-pointer [&[data-state=open]>svg]:rotate-180",
			className
		)}
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"/></svg>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
