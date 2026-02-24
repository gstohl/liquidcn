<script lang="ts">
	import { cn } from "$lib/utils/cn";

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<li role="presentation" aria-hidden="true" class={cn("[&>svg]:size-3.5", className)}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
</li>
