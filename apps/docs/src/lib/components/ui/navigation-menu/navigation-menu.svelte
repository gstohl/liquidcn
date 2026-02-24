<script lang="ts">
  import { NavigationMenu as NavPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    ...restProps
  }: { class?: string; children?: import("svelte").Snippet } & Record<string, any> = $props();
</script>

<NavPrimitive.Root
  class={cn(
    "relative z-10 flex max-w-max flex-1 items-center justify-center",
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
  <div class="absolute left-0 top-full flex justify-center">
    <NavPrimitive.Viewport
      class={cn(
        "origin-top-center relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl glass-heavy shadow-glass-lg transition-all duration-300",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
        "md:w-[var(--bits-navigation-menu-viewport-width)]"
      )}
    ></NavPrimitive.Viewport>
  </div>
</NavPrimitive.Root>
