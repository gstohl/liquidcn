<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";

	interface Props extends ToggleGroupPrimitive.RootProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<ToggleGroupPrimitive.Root class={cn("flex items-center gap-1", className)} {...rest}>
	{@render rest.children?.()}
</ToggleGroupPrimitive.Root>
