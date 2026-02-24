<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Slider as SliderPrimitive } from "bits-ui";

	interface Props extends SliderPrimitive.RootProps {
		class?: string;
	}

	let { class: className, value = $bindable([50]), ...rest }: Props = $props();
</script>

<SliderPrimitive.Root
	bind:value
	class={cn("relative flex w-full touch-none select-none items-center", className)}
	{...rest}
>
	<span class="relative h-3 w-full grow overflow-hidden rounded-full glass border border-glass-border-strong shadow-glass-sm">
		<SliderPrimitive.Range class="absolute h-full bg-primary rounded-full" />
	</span>
	{#each value as _, i}
		<SliderPrimitive.Thumb
			index={i}
			class="block h-5 w-5 rounded-full glass-heavy border-2 border-primary shadow-glass-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-110 cursor-pointer"
		/>
	{/each}
</SliderPrimitive.Root>
