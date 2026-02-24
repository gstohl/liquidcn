<script lang="ts">
  import { Menubar as MenubarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    ...restProps
  }: { class?: string; children?: import("svelte").Snippet } & Record<string, any> = $props();
</script>

<MenubarPrimitive.Root
  class={cn(
    "flex h-10 items-center space-x-1 rounded-xl glass-heavy p-1 shadow-glass",
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</MenubarPrimitive.Root>
