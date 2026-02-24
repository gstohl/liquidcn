<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { PinInput as PinInputPrimitive } from "bits-ui";

	interface Props extends PinInputPrimitive.CellProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<PinInputPrimitive.Cell
	class={cn(
		"relative flex h-10 w-10 items-center justify-center rounded-lg glass border border-glass-border-strong text-sm shadow-glass-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-ring",
		className
	)}
	{...rest}
>
	{#snippet children({ char })}
		{char ?? ""}
	{/snippet}
</PinInputPrimitive.Cell>
