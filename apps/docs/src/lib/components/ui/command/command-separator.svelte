<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Command as CommandPrimitive } from "bits-ui";

	interface Props extends CommandPrimitive.SeparatorProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<CommandPrimitive.Separator class={cn("-mx-1 h-px bg-glass-border", className)} {...rest} />
