<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    ...restProps
  }: { class?: string; children?: import("svelte").Snippet } & Record<string, any> = $props();
</script>

<div class={cn("mt-auto flex flex-col gap-2 p-4", className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>
