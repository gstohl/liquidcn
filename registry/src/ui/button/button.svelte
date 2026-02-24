<script lang="ts" module>
	import { cva, type VariantProps } from "class-variance-authority";

	export const buttonVariants = cva(
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
		{
			variants: {
				variant: {
					default:
						"glass hover:shadow-glass-lg active:scale-[0.98]",
					primary:
						"bg-primary text-primary-foreground shadow-glass hover:brightness-110 active:scale-[0.98]",
					destructive:
						"bg-destructive text-destructive-foreground shadow-glass hover:brightness-110 active:scale-[0.98]",
					outline:
						"border border-glass-border bg-transparent hover:bg-glass-light active:scale-[0.98]",
					ghost:
						"hover:bg-glass-light active:scale-[0.98]",
					link: "text-primary underline-offset-4 hover:underline",
				},
				size: {
					default: "h-10 px-4 py-2",
					sm: "h-9 rounded-md px-3",
					lg: "h-11 rounded-lg px-8 text-base",
					icon: "h-10 w-10 rounded-lg",
				},
			},
			defaultVariants: {
				variant: "default",
				size: "default",
			},
		}
	);

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
</script>

<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLButtonAttributes {
		variant?: ButtonVariant;
		size?: ButtonSize;
		class?: string;
		children?: Snippet;
	}

	let {
		variant = "default",
		size = "default",
		class: className,
		children,
		...rest
	}: Props = $props();
</script>

<button class={cn(buttonVariants({ variant, size }), className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</button>
