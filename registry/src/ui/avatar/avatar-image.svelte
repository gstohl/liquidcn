<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { Avatar as AvatarPrimitive } from "bits-ui";

	let { class: className, ...rest }: AvatarPrimitive.ImageProps = $props();
</script>

<AvatarPrimitive.Image
	class={cn("aspect-square h-full w-full object-cover", className)}
	{...rest}
/>
