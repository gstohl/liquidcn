<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";

	let { children, ...rest }: DialogPrimitive.TriggerProps = $props();
</script>

<DialogPrimitive.Trigger {...rest}>
	{#if children}
		{@render children()}
	{/if}
</DialogPrimitive.Trigger>
