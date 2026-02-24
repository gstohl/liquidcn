<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    withHandle = false,
    ...restProps
  }: {
    class?: string;
    withHandle?: boolean;
  } & Record<string, any> = $props();

  let direction = $state<"horizontal" | "vertical">("horizontal");
  let handleEl: HTMLDivElement | undefined = $state();

  $effect(() => {
    if (handleEl) {
      const group = handleEl.closest("[data-panel-group]");
      if (group) {
        direction = (group.getAttribute("data-direction") as "horizontal" | "vertical") ?? "horizontal";
      }
    }
  });
</script>

<div
  bind:this={handleEl}
  class={cn(
    "relative flex items-center justify-center",
    direction === "horizontal"
      ? "w-px bg-white/10 mx-0 hover:bg-white/25 transition-colors cursor-col-resize"
      : "h-px bg-white/10 my-0 hover:bg-white/25 transition-colors cursor-row-resize",
    className
  )}
  data-panel-handle=""
  {...restProps}
>
  {#if withHandle}
    <div
      class={cn(
        "z-10 flex h-4 w-3 items-center justify-center rounded-sm glass shadow-glass",
        direction === "vertical" && "h-3 w-4 rotate-90"
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="opacity-50">
        <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>
      </svg>
    </div>
  {/if}
</div>
