<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: AccordionPrimitive.ContentProps = $props();
</script>

<AccordionPrimitive.Content
	class={cn(
		"overflow-hidden text-sm transition-all data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in",
		className
	)}
	{...rest}
>
	<div class="px-4 pb-4 pt-0">
		{#if children}
			{@render children()}
		{/if}
	</div>
</AccordionPrimitive.Content>
