<script lang="ts" module>
	import { cva, type VariantProps } from "class-variance-authority";

	export const alertVariants = cva(
		"relative w-full rounded-xl glass p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
		{
			variants: {
				variant: {
					default: "",
					destructive:
						"border-destructive/50 text-destructive [&>svg]:text-destructive",
				},
			},
			defaultVariants: {
				variant: "default",
			},
		}
	);

	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
</script>

<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: AlertVariant;
		class?: string;
		children?: Snippet;
	}

	let { variant = "default", class: className, children, ...rest }: Props = $props();
</script>

<div
	role="alert"
	class={cn(alertVariants({ variant }), className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</div>
