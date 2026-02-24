<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Command as CommandPrimitive } from "bits-ui";

	interface Props extends CommandPrimitive.RootProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<CommandPrimitive.Root
	class={cn(
		"flex h-full w-full flex-col overflow-hidden rounded-xl glass-heavy shadow-glass-lg",
		className
	)}
	{...rest}
>
	{@render rest.children?.()}
</CommandPrimitive.Root>
