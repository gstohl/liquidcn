<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";

	let { children, ...rest }: TooltipPrimitive.TriggerProps = $props();
</script>

<TooltipPrimitive.Trigger {...rest}>
	{#if children}
		{@render children()}
	{/if}
</TooltipPrimitive.Trigger>
