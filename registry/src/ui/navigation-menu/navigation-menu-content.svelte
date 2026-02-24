<script lang="ts">
  import { NavigationMenu as NavPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<NavPrimitive.Content
  class={cn(
    "left-0 top-0 w-full p-4",
    "data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out",
    "data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out",
    "md:absolute md:w-auto",
    className
  )}
  {...restProps}
/>
