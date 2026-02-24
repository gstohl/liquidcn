<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: AccordionPrimitive.RootProps = $props();
</script>

<AccordionPrimitive.Root class={cn("w-full", className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</AccordionPrimitive.Root>
