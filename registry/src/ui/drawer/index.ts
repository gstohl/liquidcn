import { Dialog as DialogPrimitive } from "bits-ui";

export { default as Drawer } from "./drawer.svelte";
export { default as DrawerContent } from "./drawer-content.svelte";
export { default as DrawerHeader } from "./drawer-header.svelte";
export { default as DrawerFooter } from "./drawer-footer.svelte";
export { default as DrawerTitle } from "./drawer-title.svelte";
export { default as DrawerDescription } from "./drawer-description.svelte";

export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;
