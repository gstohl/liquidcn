<script lang="ts">
  import { NavigationMenu as NavPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<NavPrimitive.Link
  class={cn(
    "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200",
    "hover:glass hover:shadow-glass",
    className
  )}
  {...restProps}
/>
