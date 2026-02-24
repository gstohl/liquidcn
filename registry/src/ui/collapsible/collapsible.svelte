<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from "bits-ui";

	interface Props extends CollapsiblePrimitive.RootProps {}

	let { ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Root {...rest}>
	{@render rest.children?.()}
</CollapsiblePrimitive.Root>
