<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Badge } from "$lib/components/ui/badge";
	import { Label } from "$lib/components/ui/label";
	import { Separator } from "$lib/components/ui/separator";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { Switch } from "$lib/components/ui/switch";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Alert, AlertTitle, AlertDescription } from "$lib/components/ui/alert";
	import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
	import { Tabs, TabsList, TabsTrigger, TabsContent } from "$lib/components/ui/tabs";
	import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "$lib/components/ui/accordion";
	import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "$lib/components/ui/dialog";
	import { Tooltip, TooltipTrigger, TooltipContent } from "$lib/components/ui/tooltip";
	import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "$lib/components/ui/dropdown-menu";
	import { Toaster, toast } from "$lib/components/ui/toast";
	import { Progress } from "$lib/components/ui/progress";
	import { Slider } from "$lib/components/ui/slider";
	import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "$lib/components/ui/sheet";
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { Popover, PopoverTrigger, PopoverContent } from "$lib/components/ui/popover";
	import { RadioGroup, RadioGroupItem } from "$lib/components/ui/radio-group";
	import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "$lib/components/ui/table";
	import { Toggle } from "$lib/components/ui/toggle";
	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ui/toggle-group";
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "$lib/components/ui/collapsible";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "$lib/components/ui/breadcrumb";
	import { Pagination, PaginationItem, PaginationPrev, PaginationNext } from "$lib/components/ui/pagination";
	import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "$lib/components/ui/context-menu";
	import { HoverCard, HoverCardTrigger, HoverCardContent } from "$lib/components/ui/hover-card";
	import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "$lib/components/ui/alert-dialog";
	import { Spinner } from "$lib/components/ui/spinner";
	// InputOTP has SSR issues with bits-ui PinInput — available for client-side use
	// import { InputOTP, InputOTPSlot, InputOTPSeparator } from "$lib/components/ui/input-otp";
	import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator, CommandEmpty } from "$lib/components/ui/command";
	import { Calendar } from "$lib/components/ui/calendar";
	import { DatePicker } from "$lib/components/ui/date-picker";
	import { Carousel, CarouselItem } from "$lib/components/ui/carousel";
	import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerTrigger, DrawerClose } from "$lib/components/ui/drawer";
	import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "$lib/components/ui/menubar";
	import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "$lib/components/ui/navigation-menu";
	import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "$lib/components/ui/resizable";
	import { Combobox } from "$lib/components/ui/combobox";

	let checked = $state(false);
	let switched = $state(false);
	let progress = $state(45);
	let sliderValue = $state([33]);
	let radioValue = $state("comfortable");
	let collapsibleOpen = $state(false);
	let togglePressed = $state(false);
	let comboboxValue = $state("");
	let drawerOpen = $state(false);

	const frameworks = [
		{ value: "sveltekit", label: "SvelteKit" },
		{ value: "nextjs", label: "Next.js" },
		{ value: "nuxt", label: "Nuxt" },
		{ value: "remix", label: "Remix" },
		{ value: "astro", label: "Astro" },
	];
</script>

<Toaster />

<div class="min-h-screen text-white" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #a855f7 50%, #d946ef 75%, #6366f1 100%); --color-foreground: oklch(0.97 0 0); --color-muted-foreground: oklch(0.85 0 0); --color-destructive: oklch(0.7 0.2 25);">
	<!-- Hero -->
	<header class="relative overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
		<div class="relative max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
			<Badge variant="outline" class="mb-4 text-white/80 border-white/30">v0.0.1</Badge>
			<h1 class="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-blue-200 to-pink-200 bg-clip-text text-transparent">
				liquid cn
			</h1>
			<p class="text-lg text-white/70 max-w-xl mx-auto mb-8">
				Beautiful liquid glass components for SvelteKit. Copy and paste into your apps. Open source.
			</p>
			<div class="flex gap-3 justify-center">
				<Button variant="primary">Get Started</Button>
				<Button variant="outline">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					GitHub
				</Button>
			</div>
			<div class="mt-6">
				<code class="glass-light rounded-lg px-4 py-2 text-sm font-mono">npx liquid-cn add button</code>
			</div>
		</div>
	</header>

	<!-- Component Showcase -->
	<main class="max-w-5xl mx-auto px-6 pb-20 space-y-12">
		<!-- Buttons -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Button</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex flex-wrap gap-3">
						<Button>Glass Default</Button>
						<Button variant="primary">Primary</Button>
						<Button variant="destructive">Destructive</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="link">Link</Button>
					</div>
					<div class="flex flex-wrap gap-3 mt-4">
						<Button size="sm">Small</Button>
						<Button size="default">Default</Button>
						<Button size="lg">Large</Button>
						<Button size="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Card -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Card</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Glass Card</CardTitle>
						<CardDescription>A frosted glass container with depth and blur.</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-white/60">The liquid glass effect creates a sense of depth and layering, with subtle transparency and blur revealing the content beneath.</p>
					</CardContent>
					<CardFooter>
						<Button size="sm">Learn More</Button>
					</CardFooter>
				</Card>
				<Card class="glass-heavy">
					<CardHeader>
						<CardTitle>Heavy Glass</CardTitle>
						<CardDescription>More opacity and stronger blur for emphasis.</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-white/60">Use the glass-heavy variant for cards that need to stand out more prominently against the background.</p>
					</CardContent>
					<CardFooter>
						<Button variant="primary" size="sm">Get Started</Button>
					</CardFooter>
				</Card>
			</div>
		</section>

		<!-- Forms -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Form Controls</h2>
			<Card>
				<CardContent class="pt-6 space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="space-y-2">
							<Label for="name">Name</Label>
							<Input id="name" placeholder="Enter your name" />
						</div>
						<div class="space-y-2">
							<Label for="email">Email</Label>
							<Input id="email" type="email" placeholder="you@example.com" />
						</div>
					</div>
					<div class="space-y-2">
						<Label for="message">Message</Label>
						<Textarea id="message" placeholder="Tell us what you think..." />
					</div>
					<div class="flex items-center gap-6">
						<div class="flex items-center gap-2">
							<Checkbox bind:checked />
							<Label>Accept terms</Label>
						</div>
						<div class="flex items-center gap-2">
							<Switch bind:checked={switched} />
							<Label>Notifications</Label>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Badges -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Badge</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex flex-wrap gap-3">
						<Badge>Glass</Badge>
						<Badge variant="primary">Primary</Badge>
						<Badge variant="destructive">Destructive</Badge>
						<Badge variant="outline">Outline</Badge>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Alert -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Alert</h2>
			<div class="space-y-4">
				<Alert>
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>You can add components to your project using the CLI.</AlertDescription>
				</Alert>
				<Alert variant="destructive">
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>Something went wrong. Please try again.</AlertDescription>
				</Alert>
			</div>
		</section>

		<!-- Avatar -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Avatar</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex items-center gap-4">
						<Avatar>
							<AvatarFallback>LC</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>DK</AvatarFallback>
						</Avatar>
						<Avatar class="h-12 w-12">
							<AvatarFallback>AB</AvatarFallback>
						</Avatar>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Tabs -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Tabs</h2>
			<Tabs value="preview">
				<TabsList>
					<TabsTrigger value="preview">Preview</TabsTrigger>
					<TabsTrigger value="code">Code</TabsTrigger>
					<TabsTrigger value="usage">Usage</TabsTrigger>
				</TabsList>
				<TabsContent value="preview">
					<Card>
						<CardContent class="pt-6">
							<p class="text-sm text-white/60">This is the preview tab. Glass tabs with smooth transitions between states.</p>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="code">
					<Card>
						<CardContent class="pt-6">
							<pre class="text-sm font-mono glass-light rounded-lg p-4 overflow-x-auto"><code>{"<"}Tabs value="preview"{">"}
  {"<"}TabsList{">"}
    {"<"}TabsTrigger value="preview"{">"}Preview{"<"}/TabsTrigger{">"}
    {"<"}TabsTrigger value="code"{">"}Code{"<"}/TabsTrigger{">"}
  {"<"}/TabsList{">"}
{"<"}/Tabs{">"}</code></pre>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="usage">
					<Card>
						<CardContent class="pt-6">
							<p class="text-sm text-white/60">Import and use tabs to organize content into sections.</p>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</section>

		<!-- Accordion -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Accordion</h2>
			<Accordion type="single">
				<AccordionItem value="item-1">
					<AccordionTrigger>What is liquidcn?</AccordionTrigger>
					<AccordionContent>
						liquidcn is a collection of beautifully crafted liquid glass components for SvelteKit. Built on bits-ui primitives with a glassmorphism design system.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>How do I install components?</AccordionTrigger>
					<AccordionContent>
						Use the CLI to add components to your project: <code class="glass-light rounded px-1.5 py-0.5 text-xs font-mono">npx liquid-cn add button</code>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Can I customize the styles?</AccordionTrigger>
					<AccordionContent>
						Yes! All components are copied directly into your project. You own the code and can customize everything — colors, blur, shadows, borders.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>

		<!-- Dialog -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Dialog</h2>
			<Card>
				<CardContent class="pt-6">
					<Dialog>
						<DialogTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 glass hover:shadow-glass-lg active:scale-[0.98] h-10 px-4 py-2 cursor-pointer">
							Open Dialog
						</DialogTrigger>
						<DialogContent>
							<DialogClose />
							<DialogTitle>Glass Dialog</DialogTitle>
							<DialogDescription>
								A beautiful frosted glass modal with blur and depth. The overlay dims the background while the content panel floats above.
							</DialogDescription>
							<div class="mt-4 space-y-3">
								<Input placeholder="Enter something..." />
								<div class="flex justify-end gap-2">
									<Button variant="ghost">Cancel</Button>
									<Button variant="primary">Save</Button>
								</div>
							</div>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</section>

		<!-- Dropdown & Tooltip -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Dropdown Menu & Tooltip</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex gap-4">
						<DropdownMenu>
							<DropdownMenuTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium border border-glass-border bg-transparent hover:bg-glass-light active:scale-[0.98] h-10 px-4 py-2 cursor-pointer">
								Open Menu
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Billing</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Log out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<Tooltip>
							<TooltipTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium border border-glass-border bg-transparent hover:bg-glass-light h-10 px-4 py-2 cursor-pointer">
								Hover me
							</TooltipTrigger>
							<TooltipContent>
								Glass tooltip with frosted blur
							</TooltipContent>
						</Tooltip>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Toast -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Toast</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex gap-3">
						<Button
							onclick={() => toast({ title: "Success!", description: "Your action was completed." })}
						>
							Show Toast
						</Button>
						<Button
							variant="destructive"
							onclick={() => toast({ title: "Error!", description: "Something went wrong.", variant: "destructive" })}
						>
							Error Toast
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Progress -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Progress</h2>
			<Card>
				<CardContent class="pt-6 space-y-4">
					<Progress value={progress} />
					<div class="flex gap-2">
						<Button size="sm" onclick={() => progress = Math.max(0, progress - 10)}>-10</Button>
						<Button size="sm" onclick={() => progress = Math.min(100, progress + 10)}>+10</Button>
						<span class="text-sm text-white/60 ml-2 self-center">{progress}%</span>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Slider -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Slider</h2>
			<Card>
				<CardContent class="pt-6 space-y-4">
					<Slider bind:value={sliderValue} max={100} step={1} />
					<p class="text-sm text-white/60">Value: {sliderValue[0]}</p>
				</CardContent>
			</Card>
		</section>

		<!-- Radio Group -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Radio Group</h2>
			<Card>
				<CardContent class="pt-6">
					<RadioGroup bind:value={radioValue}>
						<div class="flex items-center gap-2">
							<RadioGroupItem value="default" />
							<Label>Default</Label>
						</div>
						<div class="flex items-center gap-2">
							<RadioGroupItem value="comfortable" />
							<Label>Comfortable</Label>
						</div>
						<div class="flex items-center gap-2">
							<RadioGroupItem value="compact" />
							<Label>Compact</Label>
						</div>
					</RadioGroup>
					<p class="text-sm text-white/60 mt-3">Selected: {radioValue}</p>
				</CardContent>
			</Card>
		</section>

		<!-- Popover -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Popover</h2>
			<Card>
				<CardContent class="pt-6">
					<Popover>
						<PopoverTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium border border-glass-border bg-transparent hover:bg-glass-light active:scale-[0.98] h-10 px-4 py-2 cursor-pointer">
							Open Popover
						</PopoverTrigger>
						<PopoverContent>
							<div class="space-y-3">
								<h4 class="text-sm font-semibold">Dimensions</h4>
								<div class="grid gap-2">
									<div class="grid grid-cols-3 items-center gap-4">
										<Label class="text-right">Width</Label>
										<Input class="col-span-2" placeholder="100%" />
									</div>
									<div class="grid grid-cols-3 items-center gap-4">
										<Label class="text-right">Height</Label>
										<Input class="col-span-2" placeholder="auto" />
									</div>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</CardContent>
			</Card>
		</section>

		<!-- Sheet -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Sheet</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex gap-3">
						<Sheet>
							<SheetTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 glass hover:shadow-glass-lg active:scale-[0.98] h-10 px-4 py-2 cursor-pointer">
								Open Sheet
							</SheetTrigger>
							<SheetContent>
								<SheetTitle>Glass Sheet</SheetTitle>
								<SheetDescription>
									A frosted glass panel that slides in from the edge.
								</SheetDescription>
								<div class="mt-6 space-y-4">
									<div class="space-y-2">
										<Label>Name</Label>
										<Input placeholder="Your name" />
									</div>
									<div class="space-y-2">
										<Label>Email</Label>
										<Input placeholder="you@example.com" />
									</div>
									<Button variant="primary" class="w-full">Save changes</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Table -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Table</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Component</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Dependencies</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell class="font-medium">Button</TableCell>
						<TableCell><Badge variant="primary">Stable</Badge></TableCell>
						<TableCell class="text-white/60">cva</TableCell>
					</TableRow>
					<TableRow>
						<TableCell class="font-medium">Dialog</TableCell>
						<TableCell><Badge variant="primary">Stable</Badge></TableCell>
						<TableCell class="text-white/60">bits-ui</TableCell>
					</TableRow>
					<TableRow>
						<TableCell class="font-medium">Toast</TableCell>
						<TableCell><Badge>New</Badge></TableCell>
						<TableCell class="text-white/60">svelte/store</TableCell>
					</TableRow>
					<TableRow>
						<TableCell class="font-medium">Sheet</TableCell>
						<TableCell><Badge>New</Badge></TableCell>
						<TableCell class="text-white/60">bits-ui</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>

		<!-- Skeleton -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Skeleton</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex items-center space-x-4">
						<Skeleton class="h-12 w-12 rounded-full" />
						<div class="space-y-2">
							<Skeleton class="h-4 w-[250px]" />
							<Skeleton class="h-4 w-[200px]" />
						</div>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Toggle & Toggle Group -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Toggle & Toggle Group</h2>
			<Card>
				<CardContent class="pt-6 space-y-4">
					<div class="flex gap-3">
						<Toggle bind:pressed={togglePressed} aria-label="Toggle bold">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
						</Toggle>
						<Toggle variant="outline" aria-label="Toggle italic">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
						</Toggle>
					</div>
					<ToggleGroup type="single">
						<ToggleGroupItem value="left" aria-label="Align left">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
						</ToggleGroupItem>
						<ToggleGroupItem value="center" aria-label="Align center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg>
						</ToggleGroupItem>
						<ToggleGroupItem value="right" aria-label="Align right">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
						</ToggleGroupItem>
					</ToggleGroup>
				</CardContent>
			</Card>
		</section>

		<!-- Collapsible -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Collapsible</h2>
			<Card>
				<CardContent class="pt-6">
					<Collapsible bind:open={collapsibleOpen}>
						<div class="flex items-center justify-between">
							<h4 class="text-sm font-semibold">3 items</h4>
							<CollapsibleTrigger class="inline-flex items-center justify-center rounded-lg h-9 w-9 glass hover:shadow-glass transition-all cursor-pointer">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
							</CollapsibleTrigger>
						</div>
						<div class="rounded-lg glass px-4 py-3 mt-2 text-sm font-mono">@liquidcn/core</div>
						<CollapsibleContent>
							<div class="space-y-2 mt-2">
								<div class="rounded-lg glass px-4 py-3 text-sm font-mono">@liquidcn/cli</div>
								<div class="rounded-lg glass px-4 py-3 text-sm font-mono">@liquidcn/registry</div>
							</div>
						</CollapsibleContent>
					</Collapsible>
				</CardContent>
			</Card>
		</section>

		<!-- Breadcrumb -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Breadcrumb</h2>
			<Card>
				<CardContent class="pt-6">
					<Breadcrumb>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Components</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
						</BreadcrumbItem>
					</Breadcrumb>
				</CardContent>
			</Card>
		</section>

		<!-- Pagination -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Pagination</h2>
			<Card>
				<CardContent class="pt-6">
					<Pagination>
						<PaginationPrev />
						<PaginationItem>1</PaginationItem>
						<PaginationItem active>2</PaginationItem>
						<PaginationItem>3</PaginationItem>
						<PaginationNext />
					</Pagination>
				</CardContent>
			</Card>
		</section>

		<!-- Context Menu -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Context Menu</h2>
			<Card>
				<CardContent class="pt-6">
					<ContextMenu>
						<ContextMenuTrigger class="flex h-[100px] w-full items-center justify-center rounded-xl glass border-2 border-dashed border-glass-border text-sm text-white/60">
							Right click here
						</ContextMenuTrigger>
						<ContextMenuContent>
							<ContextMenuItem>Back</ContextMenuItem>
							<ContextMenuItem>Forward</ContextMenuItem>
							<ContextMenuItem>Reload</ContextMenuItem>
							<ContextMenuSeparator />
							<ContextMenuItem>View Source</ContextMenuItem>
							<ContextMenuItem>Inspect</ContextMenuItem>
						</ContextMenuContent>
					</ContextMenu>
				</CardContent>
			</Card>
		</section>

		<!-- Hover Card -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Hover Card</h2>
			<Card>
				<CardContent class="pt-6">
					<HoverCard>
						<HoverCardTrigger class="text-sm font-medium underline underline-offset-4 cursor-pointer">
							@liquidcn
						</HoverCardTrigger>
						<HoverCardContent>
							<div class="flex gap-3">
								<Avatar>
									<AvatarFallback>LC</AvatarFallback>
								</Avatar>
								<div class="space-y-1">
									<h4 class="text-sm font-semibold">liquid cn</h4>
									<p class="text-xs text-muted-foreground">Glass components for SvelteKit.</p>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</CardContent>
			</Card>
		</section>

		<!-- Alert Dialog -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Alert Dialog</h2>
			<Card>
				<CardContent class="pt-6">
					<AlertDialog>
						<AlertDialogTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 bg-destructive text-white hover:opacity-90 active:scale-[0.98] h-10 px-4 py-2 cursor-pointer">
							Delete Account
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your account and remove your data from our servers.
							</AlertDialogDescription>
							<div class="flex justify-end gap-2 mt-4">
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction>Continue</AlertDialogAction>
							</div>
						</AlertDialogContent>
					</AlertDialog>
				</CardContent>
			</Card>
		</section>

		<!-- Command -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Command</h2>
			<div class="max-w-md">
				<Command>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search</CommandItem>
							<CommandItem>Settings</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>Profile</CommandItem>
							<CommandItem>Billing</CommandItem>
							<CommandItem>Theme</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</div>
		</section>

		<!-- Calendar -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Calendar</h2>
			<div class="max-w-sm">
				<Calendar />
			</div>
		</section>

		<!-- Date Picker -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Date Picker</h2>
			<Card>
				<CardContent class="pt-6">
					<DatePicker />
				</CardContent>
			</Card>
		</section>

		<!-- Carousel -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Carousel</h2>
			<div class="max-w-md mx-auto px-8">
				<Carousel>
					{#each [1, 2, 3, 4, 5] as i}
						<CarouselItem>
							<div class="glass-heavy rounded-xl p-6 shadow-glass-lg">
								<div class="flex aspect-square items-center justify-center">
									<span class="text-4xl font-semibold">{i}</span>
								</div>
							</div>
						</CarouselItem>
					{/each}
				</Carousel>
			</div>
		</section>

		<!-- Drawer -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Drawer</h2>
			<Card>
				<CardContent class="pt-6">
					<Drawer bind:open={drawerOpen}>
						<DrawerTrigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 glass hover:shadow-glass-lg active:scale-[0.98] h-10 px-4 py-2 cursor-pointer">
							Open Drawer
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Edit Profile</DrawerTitle>
								<DrawerDescription>Make changes to your profile here.</DrawerDescription>
							</DrawerHeader>
							<div class="p-4 space-y-4">
								<div class="space-y-2">
									<Label>Name</Label>
									<Input placeholder="Your name" />
								</div>
								<div class="space-y-2">
									<Label>Username</Label>
									<Input placeholder="@username" />
								</div>
							</div>
							<DrawerFooter>
								<Button variant="primary">Save changes</Button>
								<DrawerClose class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 glass hover:shadow-glass-lg h-10 px-4 py-2 cursor-pointer">
									Cancel
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</CardContent>
			</Card>
		</section>

		<!-- Menubar -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Menubar</h2>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>New Tab</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Share</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Undo</MenubarItem>
						<MenubarItem>Redo</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Zoom In</MenubarItem>
						<MenubarItem>Zoom Out</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Fullscreen</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</section>

		<!-- Navigation Menu -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Navigation Menu</h2>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div class="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
								<NavigationMenuLink href="#">
									<div class="text-sm font-medium leading-none">Introduction</div>
									<p class="text-sm leading-snug text-muted-foreground mt-1">Re-usable glass components built with bits-ui.</p>
								</NavigationMenuLink>
								<NavigationMenuLink href="#">
									<div class="text-sm font-medium leading-none">Installation</div>
									<p class="text-sm leading-snug text-muted-foreground mt-1">How to install and configure liquid cn.</p>
								</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Components</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div class="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
								<NavigationMenuLink href="#">
									<div class="text-sm font-medium leading-none">Button</div>
									<p class="text-sm leading-snug text-muted-foreground mt-1">Glass-styled interactive button.</p>
								</NavigationMenuLink>
								<NavigationMenuLink href="#">
									<div class="text-sm font-medium leading-none">Dialog</div>
									<p class="text-sm leading-snug text-muted-foreground mt-1">Glass modal overlay.</p>
								</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</section>

		<!-- Resizable -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Resizable</h2>
			<Card>
				<CardContent class="pt-6">
					<ResizablePanelGroup direction="horizontal" class="min-h-[200px] rounded-xl glass">
						<ResizablePanel defaultSize={50}>
							<div class="flex h-full items-center justify-center p-6">
								<span class="font-semibold">Panel A</span>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={50}>
							<div class="flex h-full items-center justify-center p-6">
								<span class="font-semibold">Panel B</span>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</CardContent>
			</Card>
		</section>

		<!-- Combobox -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Combobox</h2>
			<Card>
				<CardContent class="pt-6">
					<Combobox
						options={frameworks}
						bind:value={comboboxValue}
						placeholder="Select framework..."
						searchPlaceholder="Search frameworks..."
					/>
				</CardContent>
			</Card>
		</section>

		<!-- Spinner -->

		<!-- Spinner -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Spinner</h2>
			<Card>
				<CardContent class="pt-6">
					<div class="flex items-center gap-4">
						<Spinner size="sm" />
						<Spinner />
						<Spinner size="lg" />
					</div>
				</CardContent>
			</Card>
		</section>

		<Separator />

		<!-- Footer -->
		<footer class="text-center py-8">
			<p class="text-sm text-white/60">
				Built with Svelte 5 + bits-ui + Tailwind CSS
			</p>
		</footer>
	</main>
</div>
