<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

	interface Props extends AlertDialogPrimitive.RootProps {}

	let { ...rest }: Props = $props();
</script>

<AlertDialogPrimitive.Root {...rest}>
	{@render rest.children?.()}
</AlertDialogPrimitive.Root>
