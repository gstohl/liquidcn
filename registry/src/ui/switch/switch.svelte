<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Switch as SwitchPrimitive } from "bits-ui";

	interface Props extends SwitchPrimitive.RootProps {
		class?: string;
	}

	let { class: className, checked = $bindable(false), ...rest }: Props = $props();
</script>

<SwitchPrimitive.Root
	bind:checked
	class={cn(
		"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full glass border border-glass-border-strong shadow-glass-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:border-primary",
		className
	)}
	{...rest}
>
	<SwitchPrimitive.Thumb
		class={cn(
			"pointer-events-none block h-5 w-5 rounded-full bg-white shadow-glass-sm transition-transform duration-200 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5"
		)}
	/>
</SwitchPrimitive.Root>
