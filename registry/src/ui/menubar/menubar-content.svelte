<script lang="ts">
  import { Menubar as MenubarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    sideOffset = 8,
    alignOffset = -4,
    ...restProps
  }: {
    class?: string;
    sideOffset?: number;
    alignOffset?: number;
  } & Record<string, any> = $props();
</script>

<MenubarPrimitive.Portal>
  <MenubarPrimitive.Content
    {sideOffset}
    {alignOffset}
    class={cn(
      "z-50 min-w-[12rem] overflow-hidden rounded-xl glass-heavy p-1 shadow-glass-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...restProps}
  />
</MenubarPrimitive.Portal>
