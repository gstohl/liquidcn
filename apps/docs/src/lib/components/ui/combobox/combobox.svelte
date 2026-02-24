<script lang="ts">
  import { Popover as PopoverPrimitive, Command as CommandPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  type Option = { value: string; label: string; disabled?: boolean };

  let {
    class: className,
    options = [],
    value = $bindable(""),
    placeholder = "Select option...",
    searchPlaceholder = "Search...",
    emptyText = "No results found.",
    ...restProps
  }: {
    class?: string;
    options?: Option[];
    value?: string;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
  } & Record<string, any> = $props();

  let open = $state(false);
  let search = $state("");

  const selectedLabel = $derived(options.find((o) => o.value === value)?.label ?? "");

  function select(optionValue: string) {
    value = value === optionValue ? "" : optionValue;
    open = false;
  }
</script>

<PopoverPrimitive.Root bind:open>
  <PopoverPrimitive.Trigger
    class={cn(
      "inline-flex items-center justify-between whitespace-nowrap rounded-xl glass-heavy px-3 py-2 text-sm shadow-glass h-10 w-[200px] cursor-pointer transition-all duration-200 hover:shadow-glass-lg",
      !value && "text-muted-foreground",
      className
    )}
    {...restProps}
  >
    {selectedLabel || placeholder}
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 shrink-0 opacity-50"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
  </PopoverPrimitive.Trigger>
  <PopoverPrimitive.Content
    class="w-[200px] p-0 glass-heavy rounded-xl shadow-glass-lg mt-1 overflow-hidden"
    sideOffset={4}
  >
    <CommandPrimitive.Root class="w-full">
      <div class="flex items-center border-b border-white/10 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 shrink-0 opacity-50"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <CommandPrimitive.Input
          bind:value={search}
          placeholder={searchPlaceholder}
          class="flex h-9 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/50 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <CommandPrimitive.List class="max-h-[200px] overflow-y-auto p-1">
        <CommandPrimitive.Empty class="py-6 text-center text-sm text-muted-foreground">
          {emptyText}
        </CommandPrimitive.Empty>
        <CommandPrimitive.Group>
          {#each options as option}
            <CommandPrimitive.Item
              value={option.value}
              keywords={[option.label]}
              disabled={option.disabled}
              onSelect={() => select(option.value)}
              class="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors duration-150 data-[highlighted]:glass data-[highlighted]:shadow-glass data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14" height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={cn("mr-2 shrink-0", value === option.value ? "opacity-100" : "opacity-0")}
              >
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              {option.label}
            </CommandPrimitive.Item>
          {/each}
        </CommandPrimitive.Group>
      </CommandPrimitive.List>
    </CommandPrimitive.Root>
  </PopoverPrimitive.Content>
</PopoverPrimitive.Root>
