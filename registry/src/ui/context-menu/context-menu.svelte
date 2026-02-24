<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

	interface Props extends ContextMenuPrimitive.RootProps {}

	let { ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Root {...rest}>
	{@render rest.children?.()}
</ContextMenuPrimitive.Root>
