<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

	let { children, ...rest }: DropdownMenuPrimitive.TriggerProps = $props();
</script>

<DropdownMenuPrimitive.Trigger {...rest}>
	{#if children}
		{@render children()}
	{/if}
</DropdownMenuPrimitive.Trigger>
