<script lang="ts">
  import { NavigationMenu as NavPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    ...restProps
  }: { class?: string; children?: import("svelte").Snippet } & Record<string, any> = $props();
</script>

<NavPrimitive.Trigger
  class={cn(
    "group inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
    "hover:glass hover:shadow-glass",
    "data-[state=open]:glass data-[state=open]:shadow-glass",
    "disabled:pointer-events-none disabled:opacity-50",
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative top-[1px] ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
</NavPrimitive.Trigger>
