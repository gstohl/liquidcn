<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
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

<DialogPrimitive.Portal>
  <DialogPrimitive.Overlay
    class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
  />
  <DialogPrimitive.Content
    class={cn(
      "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-2xl glass-heavy shadow-glass-lg",
      "data-[state=open]:animate-[sheet-in-bottom_0.5s_cubic-bezier(0.32,0.72,0,1)] data-[state=closed]:animate-[sheet-out-bottom_0.3s_cubic-bezier(0.32,0.72,0,1)]",
      className
    )}
    {...restProps}
  >
    <div class="mx-auto mt-4 h-1.5 w-12 rounded-full bg-white/30" />
    {#if children}
      {@render children()}
    {/if}
  </DialogPrimitive.Content>
</DialogPrimitive.Portal>
