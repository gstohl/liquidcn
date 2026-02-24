<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";

	interface Props extends RadioGroupPrimitive.RootProps {
		class?: string;
	}

	let { class: className, value = $bindable(""), ...rest }: Props = $props();
</script>

<RadioGroupPrimitive.Root bind:value class={cn("grid gap-2", className)} {...rest}>
	{@render rest.children?.()}
</RadioGroupPrimitive.Root>
