<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: { class?: string } & Record<string, any> = $props();
</script>

<DialogPrimitive.Title
  class={cn("text-lg font-semibold leading-none tracking-tight", className)}
  {...restProps}
/>
