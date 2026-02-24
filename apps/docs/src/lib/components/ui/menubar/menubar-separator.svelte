<script lang="ts">
  import { Menubar as MenubarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<MenubarPrimitive.Separator
  class={cn("-mx-1 my-1 h-px bg-white/10", className)}
  {...restProps}
/>
