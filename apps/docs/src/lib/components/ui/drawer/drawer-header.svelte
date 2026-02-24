<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    ...restProps
  }: { class?: string; children?: import("svelte").Snippet } & Record<string, any> = $props();
</script>

<div class={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>
