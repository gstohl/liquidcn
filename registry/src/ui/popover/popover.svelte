<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";

	interface Props extends PopoverPrimitive.RootProps {}

	let { ...rest }: Props = $props();
</script>

<PopoverPrimitive.Root {...rest}>
	{@render rest.children?.()}
</PopoverPrimitive.Root>
