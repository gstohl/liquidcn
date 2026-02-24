<script lang="ts">
  import { Menubar as MenubarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<MenubarPrimitive.Item
  class={cn(
    "relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors duration-150",
    "hover:glass hover:shadow-glass",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...restProps}
/>
