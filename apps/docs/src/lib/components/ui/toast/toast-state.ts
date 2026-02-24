import { writable } from "svelte/store";

export interface Toast {
	id: string;
	title?: string;
	description?: string;
	variant?: "default" | "destructive";
	duration?: number;
}

let count = 0;

export const toasts = writable<Toast[]>([]);

export function toast(options: Omit<Toast, "id">) {
	const id = `toast-${++count}`;
	const t: Toast = { id, duration: 4000, variant: "default", ...options };
	toasts.update((all) => [...all, t]);

	if (t.duration && t.duration > 0) {
		setTimeout(() => dismiss(id), t.duration);
	}

	return id;
}

export function dismiss(id: string) {
	toasts.update((all) => all.filter((t) => t.id !== id));
}
