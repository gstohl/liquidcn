<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Avatar as AvatarPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: AvatarPrimitive.RootProps = $props();
</script>

<AvatarPrimitive.Root
	class={cn(
		"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full glass shadow-glass-sm",
		className
	)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</AvatarPrimitive.Root>
