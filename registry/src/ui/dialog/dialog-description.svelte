<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Dialog as DialogPrimitive } from "bits-ui";

	let { class: className, children, ...rest }: DialogPrimitive.DescriptionProps = $props();
</script>

<DialogPrimitive.Description
	class={cn("text-sm text-muted-foreground", className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</DialogPrimitive.Description>
