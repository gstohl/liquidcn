# liquid cn

Beautiful liquid glass components for SvelteKit. Copy and paste into your apps. Open source.

Inspired by Apple's Liquid Glass design language — frosted blur, specular highlights, and translucent layering — built on [Svelte 5](https://svelte.dev), [bits-ui](https://bits-ui.com), and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- **46 components** — from Button to Calendar, Combobox, Date Picker, and more
- **Liquid glass aesthetic** — backdrop-blur, inner light edges, glass shadows, translucent layers
- **Copy/paste or CLI** — use `npx liquid-cn add button` or copy files directly
- **Svelte 5 runes** — `$props()`, `$state()`, `$derived()`, snippets
- **bits-ui primitives** — accessible, unstyled headless components under the hood
- **Dark mode** — automatic via `prefers-color-scheme` with tuned glass tokens
- **Tailwind v4** — design tokens via `@theme`, no `tailwind.config` needed

## Quick Start

### 1. Initialize

```bash
npx liquid-cn init
```

This adds the glass design tokens to your CSS and creates a `cn` utility.

### 2. Add components

```bash
npx liquid-cn add button card dialog
```

Or add everything:

```bash
npx liquid-cn add --all
```

### 3. Use them

```svelte
<script>
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
</script>

<Card>
  <CardHeader>
    <CardTitle>Hello</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Glass Button</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="outline">Outline</Button>
  </CardContent>
</Card>
```

## Components

| Category | Components |
|----------|-----------|
| **Core** | Button, Card, Input, Badge, Label, Separator, Textarea |
| **Feedback** | Alert, Toast, Progress, Spinner, Skeleton |
| **Overlay** | Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card, Alert Dialog |
| **Navigation** | Tabs, Accordion, Breadcrumb, Pagination, Menubar, Navigation Menu |
| **Forms** | Checkbox, Switch, Select, Radio Group, Slider, Combobox, Date Picker |
| **Data** | Table, Calendar, Command, Context Menu, Dropdown Menu |
| **Layout** | Collapsible, Toggle, Toggle Group, Scroll Area, Aspect Ratio, Resizable, Carousel, Input OTP |

## Glass Design Tokens

The design system is built on CSS custom properties via Tailwind v4 `@theme`:

```css
/* Glass backgrounds */
.glass        { background: oklch(0.98 0 0 / 0.12); backdrop-filter: blur(24px); }
.glass-heavy  { background: oklch(0.98 0 0 / 0.18); backdrop-filter: blur(24px); }
.glass-light  { background: oklch(0.98 0 0 / 0.08); backdrop-filter: blur(16px); }

/* Glass shadows include an inner specular highlight */
--shadow-glass: 0 4px 24px oklch(0 0 0 / 0.12),
                0 1px 2px oklch(0 0 0 / 0.08),
                inset 0 1px 0 oklch(1 0 0 / 0.2);

/* Glass borders */
--color-glass-border: oklch(0.98 0 0 / 0.3);
```

All tokens auto-adapt for dark mode via `prefers-color-scheme`.

## Project Structure

```
liquidcn/
  apps/docs/          # SvelteKit docs & showcase site
  packages/cli/       # npx liquid-cn CLI
  registry/
    registry.json     # Component manifest
    src/ui/           # Source files served by the CLI
  scripts/
    build-registry.ts # Builds static JSON from registry source
```

## Development

```bash
# Install dependencies
bun install

# Start the docs dev server
bun run dev

# Build the registry JSON files
bun run build:registry

# Build the docs site
bun run build
```

## Tech Stack

- **Svelte 5** — runes, snippets, fine-grained reactivity
- **SvelteKit** — SSR, routing, adapters
- **Tailwind CSS v4** — `@theme` tokens, no config file
- **bits-ui** — headless accessible primitives
- **@internationalized/date** — calendar/date-picker date handling
- **Bun** — runtime, package manager, monorepo workspaces

## License

MIT
