<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

	let { class: className, ...rest }: DropdownMenuPrimitive.SeparatorProps = $props();
</script>

<DropdownMenuPrimitive.Separator
	class={cn("-mx-1 my-1 h-px bg-glass-border", className)}
	{...rest}
/>
