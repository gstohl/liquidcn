<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: AccordionPrimitive.ItemProps = $props();
</script>

<AccordionPrimitive.Item
	class={cn("glass rounded-xl mb-2 overflow-hidden", className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</AccordionPrimitive.Item>
