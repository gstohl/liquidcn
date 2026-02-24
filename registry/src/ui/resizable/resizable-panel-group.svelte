<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    direction = "horizontal",
    ...restProps
  }: {
    class?: string;
    children?: import("svelte").Snippet;
    direction?: "horizontal" | "vertical";
  } & Record<string, any> = $props();
</script>

<div
  class={cn(
    "flex h-full w-full",
    direction === "vertical" ? "flex-col" : "flex-row",
    className
  )}
  data-panel-group=""
  data-direction={direction}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
