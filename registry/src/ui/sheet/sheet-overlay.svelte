<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";

	interface Props extends DialogPrimitive.OverlayProps {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<DialogPrimitive.Overlay
	class={cn(
		"fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
		className
	)}
	{...rest}
/>
