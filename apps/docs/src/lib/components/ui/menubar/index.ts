import { Menubar as MenubarPrimitive } from "bits-ui";

export { default as Menubar } from "./menubar.svelte";
export { default as MenubarTrigger } from "./menubar-trigger.svelte";
export { default as MenubarContent } from "./menubar-content.svelte";
export { default as MenubarItem } from "./menubar-item.svelte";
export { default as MenubarSeparator } from "./menubar-separator.svelte";

export const MenubarMenu = MenubarPrimitive.Menu;
export const MenubarGroup = MenubarPrimitive.Group;
export const MenubarSub = MenubarPrimitive.Sub;
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
