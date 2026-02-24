<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: DropdownMenuPrimitive.GroupHeadingProps = $props();
</script>

<DropdownMenuPrimitive.GroupHeading
	class={cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</DropdownMenuPrimitive.GroupHeading>
