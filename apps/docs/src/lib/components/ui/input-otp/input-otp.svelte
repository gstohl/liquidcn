<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { PinInput as PinInputPrimitive } from "bits-ui";

	interface Props extends PinInputPrimitive.RootProps {
		class?: string;
	}

	let { class: className, value = $bindable([]), ...rest }: Props = $props();
</script>

<PinInputPrimitive.Root
	bind:value
	class={cn("flex items-center gap-2", className)}
	{...rest}
>
	{@render rest.children?.()}
</PinInputPrimitive.Root>
