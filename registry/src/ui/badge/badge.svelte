<script lang="ts" module>
	import { cva, type VariantProps } from "class-variance-authority";

	export const badgeVariants = cva(
		"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
		{
			variants: {
				variant: {
					default: "glass text-foreground",
					primary: "bg-primary text-primary-foreground",
					destructive: "bg-destructive text-destructive-foreground",
					outline: "border border-glass-border text-foreground",
				},
			},
			defaultVariants: {
				variant: "default",
			},
		}
	);

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: BadgeVariant;
		class?: string;
		children?: Snippet;
	}

	let { variant = "default", class: className, children, ...rest }: Props = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</div>
