<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

	interface Props extends ContextMenuPrimitive.SeparatorProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Separator class={cn("-mx-1 my-1 h-px bg-glass-border", className)} {...rest} />
