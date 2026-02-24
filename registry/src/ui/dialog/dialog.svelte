<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";

	let {
		open = $bindable(false),
		children,
		...rest
	}: DialogPrimitive.RootProps = $props();
</script>

<DialogPrimitive.Root bind:open {...rest}>
	{#if children}
		{@render children()}
	{/if}
</DialogPrimitive.Root>
