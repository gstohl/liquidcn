<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { toasts, dismiss } from "./toast-state.js";
</script>

{#if $toasts.length > 0}
	<div class="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
		{#each $toasts as t (t.id)}
			<div
				class={cn(
					"rounded-xl p-4 pr-8 shadow-glass-lg animate-slide-in relative",
					t.variant === "destructive"
						? "bg-red-950/90 border border-red-400/40 text-red-100"
						: "bg-white/90 dark:bg-zinc-900/90 border border-white/40 dark:border-white/15 text-zinc-900 dark:text-zinc-100"
				)}
				style="backdrop-filter: blur(40px) saturate(1.8); -webkit-backdrop-filter: blur(40px) saturate(1.8);"
				role="alert"
			>
				{#if t.title}
					<p class="text-sm font-semibold">{t.title}</p>
				{/if}
				{#if t.description}
					<p class={cn("text-sm mt-1", t.variant === "destructive" ? "text-red-200" : "text-zinc-600 dark:text-zinc-400")}>{t.description}</p>
				{/if}
				<button
					class={cn(
						"absolute right-2 top-2 rounded-md p-1 transition-colors cursor-pointer",
						t.variant === "destructive" ? "text-red-300 hover:text-red-100" : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200"
					)}
					onclick={() => dismiss(t.id)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
				</button>
			</div>
		{/each}
	</div>
{/if}
