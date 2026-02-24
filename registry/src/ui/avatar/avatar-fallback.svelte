<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Avatar as AvatarPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: AvatarPrimitive.FallbackProps = $props();
</script>

<AvatarPrimitive.Fallback
	class={cn(
		"flex h-full w-full items-center justify-center rounded-full bg-glass-heavy text-sm font-medium",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</AvatarPrimitive.Fallback>
