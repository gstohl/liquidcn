<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: DialogPrimitive.TitleProps = $props();
</script>

<DialogPrimitive.Title
	class={cn("text-lg font-semibold leading-none tracking-tight", className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</DialogPrimitive.Title>
