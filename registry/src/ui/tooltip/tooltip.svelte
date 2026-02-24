<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";

	let { children, ...rest }: TooltipPrimitive.RootProps = $props();
</script>

<TooltipPrimitive.Provider>
	<TooltipPrimitive.Root {...rest}>
		{#if children}
			{@render children()}
		{/if}
	</TooltipPrimitive.Root>
</TooltipPrimitive.Provider>
