<script lang="ts">
	import { cn } from "$lib/utils/cn";

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<div role="separator" class={cn("text-muted-foreground", className)}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>
</div>
