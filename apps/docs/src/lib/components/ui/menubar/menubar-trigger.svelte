<script lang="ts">
  import { Menubar as MenubarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<MenubarPrimitive.Trigger
  class={cn(
    "flex cursor-pointer select-none items-center rounded-lg px-3 py-1.5 text-sm font-medium outline-none transition-all duration-200",
    "hover:glass hover:shadow-glass",
    "data-[state=open]:glass data-[state=open]:shadow-glass",
    className
  )}
  {...restProps}
/>
