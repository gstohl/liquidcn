<script lang="ts">
  import { Calendar as CalendarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/cn";

  let {
    class: className,
    ...restProps
  }: CalendarPrimitive.RootProps & { class?: string } = $props();
</script>

<CalendarPrimitive.Root
  class={cn("p-3 glass-heavy rounded-xl shadow-glass-lg", className)}
  {...restProps}
>
  {#snippet children({ months, weekdays })}
    <CalendarPrimitive.Header class="relative flex w-full items-center justify-between pt-1">
      <CalendarPrimitive.PrevButton
        class="inline-flex items-center justify-center rounded-lg glass h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </CalendarPrimitive.PrevButton>
      <CalendarPrimitive.Heading class="text-sm font-medium" />
      <CalendarPrimitive.NextButton
        class="inline-flex items-center justify-center rounded-lg glass h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </CalendarPrimitive.NextButton>
    </CalendarPrimitive.Header>

    {#each months as month}
      <CalendarPrimitive.Grid class="mt-4 w-full border-collapse space-y-1">
        <CalendarPrimitive.GridHead>
          <CalendarPrimitive.GridRow class="flex">
            {#each weekdays as weekday}
              <CalendarPrimitive.HeadCell
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
              >
                {weekday.slice(0, 2)}
              </CalendarPrimitive.HeadCell>
            {/each}
          </CalendarPrimitive.GridRow>
        </CalendarPrimitive.GridHead>
        <CalendarPrimitive.GridBody>
          {#each month.weeks as weekDates}
            <CalendarPrimitive.GridRow class="flex mt-2 w-full">
              {#each weekDates as date}
                <CalendarPrimitive.Cell {date} month={month.value} class="relative p-0 text-center text-sm">
                  <CalendarPrimitive.Day
                    class="inline-flex items-center justify-center rounded-lg h-9 w-9 p-0 font-normal transition-all duration-200 cursor-pointer hover:glass hover:shadow-glass aria-selected:bg-white/20 aria-selected:backdrop-blur-sm aria-selected:shadow-glass aria-selected:font-medium data-[outside-month]:text-muted-foreground/40 data-[outside-month]:pointer-events-none data-[disabled]:text-muted-foreground/40 data-[disabled]:pointer-events-none data-[today]:border data-[today]:border-white/30"
                  />
                </CalendarPrimitive.Cell>
              {/each}
            </CalendarPrimitive.GridRow>
          {/each}
        </CalendarPrimitive.GridBody>
      </CalendarPrimitive.Grid>
    {/each}
  {/snippet}
</CalendarPrimitive.Root>
