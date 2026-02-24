<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: import("svelte").Snippet;
  } & Record<string, any> = $props();
</script>

<div
  role="group"
  aria-roledescription="slide"
  class={cn("min-w-0 shrink-0 grow-0 basis-full snap-center", className)}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
