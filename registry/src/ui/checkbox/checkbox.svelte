<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Checkbox as CheckboxPrimitive } from "bits-ui";

	interface Props extends CheckboxPrimitive.RootProps {
		class?: string;
	}

	let { class: className, checked = $bindable(false), ...rest }: Props = $props();
</script>

<CheckboxPrimitive.Root
	bind:checked
	class={cn(
		"peer h-5 w-5 shrink-0 rounded-md glass border border-glass-border-strong shadow-glass-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary cursor-pointer",
		className
	)}
	{...rest}
>
	{#snippet children({ checked, indeterminate })}
		<div class="flex items-center justify-center text-current">
			{#if indeterminate}
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12h14"/></svg>
			{:else if checked}
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
