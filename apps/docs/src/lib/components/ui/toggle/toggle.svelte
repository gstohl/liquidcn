<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Toggle as TogglePrimitive } from "bits-ui";
	import { cva, type VariantProps } from "class-variance-authority";

	const toggleVariants = cva(
		"inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
		{
			variants: {
				variant: {
					default: "glass hover:shadow-glass data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
					outline: "border border-glass-border bg-transparent hover:bg-glass-light data-[state=on]:bg-glass data-[state=on]:border-primary/50",
				},
				size: {
					default: "h-10 px-3",
					sm: "h-9 px-2.5",
					lg: "h-11 px-5",
				},
			},
			defaultVariants: { variant: "default", size: "default" },
		}
	);

	type Variants = VariantProps<typeof toggleVariants>;

	interface Props extends TogglePrimitive.RootProps {
		class?: string;
		variant?: Variants["variant"];
		size?: Variants["size"];
	}

	let { class: className, variant, size, ...rest }: Props = $props();
</script>

<TogglePrimitive.Root class={cn(toggleVariants({ variant, size }), className)} {...rest}>
	{@render rest.children?.()}
</TogglePrimitive.Root>
