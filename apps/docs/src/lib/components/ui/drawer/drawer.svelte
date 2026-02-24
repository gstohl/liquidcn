<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: {
    open?: boolean;
    children?: import("svelte").Snippet;
  } & Record<string, any> = $props();
</script>

<DialogPrimitive.Root bind:open {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</DialogPrimitive.Root>
