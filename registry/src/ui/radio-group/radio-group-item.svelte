<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";

	interface Props extends RadioGroupPrimitive.ItemProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<RadioGroupPrimitive.Item
	class={cn(
		"aspect-square h-5 w-5 rounded-full glass border border-glass-border-strong shadow-glass-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary cursor-pointer",
		className
	)}
	{...rest}
>
	<RadioGroupPrimitive.ItemIndicator class="flex items-center justify-center">
		<div class="h-2.5 w-2.5 rounded-full bg-primary" />
	</RadioGroupPrimitive.ItemIndicator>
</RadioGroupPrimitive.Item>
