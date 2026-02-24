<script lang="ts">
	import { LinkPreview as HoverCardPrimitive } from "bits-ui";

	interface Props extends HoverCardPrimitive.RootProps {}

	let { ...rest }: Props = $props();
</script>

<HoverCardPrimitive.Root {...rest}>
	{@render rest.children?.()}
</HoverCardPrimitive.Root>
