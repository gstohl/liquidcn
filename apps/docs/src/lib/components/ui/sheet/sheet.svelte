<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";

	interface Props extends DialogPrimitive.RootProps {}

	let { ...rest }: Props = $props();
</script>

<DialogPrimitive.Root {...rest}>
	{@render rest.children?.()}
</DialogPrimitive.Root>
