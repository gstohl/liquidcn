<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    defaultSize = 50,
    ...restProps
  }: {
    class?: string;
    children?: import("svelte").Snippet;
    defaultSize?: number;
  } & Record<string, any> = $props();
</script>

<div
  class={cn("overflow-hidden", className)}
  style="flex: {defaultSize} 1 0%"
  data-panel=""
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
