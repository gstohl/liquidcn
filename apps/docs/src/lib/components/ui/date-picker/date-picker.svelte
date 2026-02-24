<script lang="ts">
  import { DatePicker as DatePickerPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: DatePickerPrimitive.RootProps & { class?: string } = $props();
</script>

<DatePickerPrimitive.Root {...restProps}>
  <DatePickerPrimitive.Label class="block text-sm font-medium mb-2">
    Date
  </DatePickerPrimitive.Label>

  <div class="flex items-center gap-2">
    <DatePickerPrimitive.Input
        class={cn(
          "glass-heavy inline-flex h-10 w-full max-w-[280px] rounded-xl px-3 shadow-glass text-sm items-center",
          className
        )}
      >
        {#snippet children({ segments })}
          {#each segments as { part, value }}
            <DatePickerPrimitive.Segment
              {part}
              class="inline data-[type=literal]:px-0.5 data-[placeholder]:text-muted-foreground/50 focus:outline-none focus:rounded focus:bg-white/20 px-0.5 tabular-nums"
            >
              {value}
            </DatePickerPrimitive.Segment>
          {/each}
        {/snippet}
      </DatePickerPrimitive.Input>
      <DatePickerPrimitive.Trigger
        class="inline-flex items-center justify-center rounded-lg h-10 w-10 glass transition-all duration-200 cursor-pointer hover:shadow-glass"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
      </DatePickerPrimitive.Trigger>
    </div>

    <DatePickerPrimitive.Content
      class="glass-heavy rounded-xl p-3 shadow-glass-lg mt-1"
      sideOffset={6}
    >
      <DatePickerPrimitive.Calendar>
        {#snippet children({ months: calMonths, weekdays: calWeekdays })}
          <DatePickerPrimitive.Header class="relative flex w-full items-center justify-between pt-1">
            <DatePickerPrimitive.PrevButton
              class="inline-flex items-center justify-center rounded-lg glass h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </DatePickerPrimitive.PrevButton>
            <DatePickerPrimitive.Heading class="text-sm font-medium" />
            <DatePickerPrimitive.NextButton
              class="inline-flex items-center justify-center rounded-lg glass h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </DatePickerPrimitive.NextButton>
          </DatePickerPrimitive.Header>

          {#each calMonths as month}
            <DatePickerPrimitive.Grid class="mt-4 w-full border-collapse space-y-1">
              <DatePickerPrimitive.GridHead>
                <DatePickerPrimitive.GridRow class="flex">
                  {#each calWeekdays as weekday}
                    <DatePickerPrimitive.HeadCell
                      class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                    >
                      {weekday.slice(0, 2)}
                    </DatePickerPrimitive.HeadCell>
                  {/each}
                </DatePickerPrimitive.GridRow>
              </DatePickerPrimitive.GridHead>
              <DatePickerPrimitive.GridBody>
                {#each month.weeks as weekDates}
                  <DatePickerPrimitive.GridRow class="flex mt-2 w-full">
                    {#each weekDates as date}
                      <DatePickerPrimitive.Cell {date} month={month.value} class="relative p-0 text-center text-sm">
                        <DatePickerPrimitive.Day
                          class="inline-flex items-center justify-center rounded-lg h-9 w-9 p-0 font-normal transition-all duration-200 cursor-pointer hover:glass hover:shadow-glass aria-selected:bg-white/20 aria-selected:backdrop-blur-sm aria-selected:shadow-glass aria-selected:font-medium data-[outside-month]:text-muted-foreground/40 data-[outside-month]:pointer-events-none data-[disabled]:text-muted-foreground/40 data-[disabled]:pointer-events-none data-[today]:border data-[today]:border-white/30"
                        />
                      </DatePickerPrimitive.Cell>
                    {/each}
                  </DatePickerPrimitive.GridRow>
                {/each}
              </DatePickerPrimitive.GridBody>
            </DatePickerPrimitive.Grid>
          {/each}
        {/snippet}
      </DatePickerPrimitive.Calendar>
    </DatePickerPrimitive.Content>
</DatePickerPrimitive.Root>
