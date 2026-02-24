<script lang="ts">
	import { cn } from "$lib/utils/cn";

	interface Props {
		class?: string;
		size?: "sm" | "default" | "lg";
	}

	let { class: className, size = "default" }: Props = $props();

	const sizeClasses = {
		sm: "h-4 w-4 border-2",
		default: "h-6 w-6 border-2",
		lg: "h-8 w-8 border-3",
	};
</script>

<div
	class={cn(
		"animate-spin rounded-full border-current border-t-transparent",
		sizeClasses[size],
		className
	)}
	role="status"
	aria-label="Loading"
/>
