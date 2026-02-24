<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Progress as ProgressPrimitive } from "bits-ui";

	interface Props extends ProgressPrimitive.RootProps {
		class?: string;
		indicatorClass?: string;
	}

	let { class: className, indicatorClass, value = 0, max = 100, ...rest }: Props = $props();
</script>

<ProgressPrimitive.Root
	{value}
	{max}
	class={cn(
		"relative h-3 w-full overflow-hidden rounded-full glass border border-glass-border-strong shadow-glass-sm",
		className
	)}
	{...rest}
>
	<div
		class={cn(
			"h-full rounded-full bg-primary transition-all duration-500 ease-out",
			indicatorClass
		)}
		style="width: {((value ?? 0) / max) * 100}%"
	/>
</ProgressPrimitive.Root>
