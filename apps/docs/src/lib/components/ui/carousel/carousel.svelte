<script lang="ts">
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    children,
    orientation = "horizontal",
    ...restProps
  }: {
    class?: string;
    children?: import("svelte").Snippet;
    orientation?: "horizontal" | "vertical";
  } & Record<string, any> = $props();

  let scrollContainer: HTMLDivElement | undefined = $state();
  let canScrollPrev = $state(false);
  let canScrollNext = $state(true);

  function updateScrollState() {
    if (!scrollContainer) return;
    if (orientation === "horizontal") {
      canScrollPrev = scrollContainer.scrollLeft > 0;
      canScrollNext = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 1;
    } else {
      canScrollPrev = scrollContainer.scrollTop > 0;
      canScrollNext = scrollContainer.scrollTop < scrollContainer.scrollHeight - scrollContainer.clientHeight - 1;
    }
  }

  function scrollPrev() {
    if (!scrollContainer) return;
    const amount = orientation === "horizontal" ? scrollContainer.clientWidth : scrollContainer.clientHeight;
    scrollContainer.scrollBy({
      [orientation === "horizontal" ? "left" : "top"]: -amount,
      behavior: "smooth",
    });
  }

  function scrollNext() {
    if (!scrollContainer) return;
    const amount = orientation === "horizontal" ? scrollContainer.clientWidth : scrollContainer.clientHeight;
    scrollContainer.scrollBy({
      [orientation === "horizontal" ? "left" : "top"]: amount,
      behavior: "smooth",
    });
  }
</script>

<div
  class={cn("relative", className)}
  role="region"
  aria-roledescription="carousel"
  {...restProps}
>
  <div
    bind:this={scrollContainer}
    onscroll={updateScrollState}
    class={cn(
      "flex gap-4 overflow-hidden scroll-smooth snap-mandatory",
      orientation === "horizontal" ? "snap-x flex-row" : "snap-y flex-col"
    )}
  >
    {#if children}
      {@render children()}
    {/if}
  </div>

  <button
    onclick={scrollPrev}
    disabled={!canScrollPrev}
    class="absolute top-1/2 -translate-y-1/2 -left-4 inline-flex items-center justify-center h-8 w-8 rounded-full glass-heavy shadow-glass-lg transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-glass-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  </button>
  <button
    onclick={scrollNext}
    disabled={!canScrollNext}
    class="absolute top-1/2 -translate-y-1/2 -right-4 inline-flex items-center justify-center h-8 w-8 rounded-full glass-heavy shadow-glass-lg transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-glass-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</div>
