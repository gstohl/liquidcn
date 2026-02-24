<script lang="ts">
  import { NavigationMenu as NavPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<NavPrimitive.List
  class={cn(
    "group flex flex-1 list-none items-center justify-center space-x-1 rounded-xl glass-heavy p-1 shadow-glass",
    className
  )}
  {...restProps}
/>
