<script lang="ts">
	import CarCard from '$lib/components/CarCard.svelte';
	import FilterPanel, { type Filters } from '$lib/components/FilterPanel.svelte';
	import InventorySummary from '$lib/components/InventorySummary.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { cars } from '$lib/data/cars';
	import { SITE_URL } from '$lib/seo';

	const years = cars.map((car) => car.year);
	const prices = cars.map((car) => car.priceEstimate);
	const mileages = cars.map((car) => car.mileage);

	const defaultFilters: Filters = {
		query: '',
		status: [],
		fuel: [],
		transmission: 'All',
		minYear: Math.min(...years),
		maxYear: Math.max(...years),
		minPrice: Math.min(...prices),
		maxPrice: Math.max(...prices),
		minMileage: Math.min(...mileages),
		maxMileage: Math.max(...mileages)
	};

	let filters: Filters = { ...defaultFilters };

	const handleUpdate = (next: Filters) => {
		filters = next;
	};

	const handleReset = () => {
		filters = { ...defaultFilters };
	};

	$: filtered = cars.filter((car) => {
		const matchesQuery =
			filters.query.length === 0 ||
			`${car.name} ${car.location} ${car.year}`.toLowerCase().includes(filters.query.toLowerCase());
		const matchesStatus = filters.status.length === 0 || filters.status.includes(car.status);
		const matchesFuel = filters.fuel.length === 0 || filters.fuel.includes(car.fuel);
		const matchesTransmission =
			filters.transmission === 'All' || car.transmission === filters.transmission;
		const matchesYear = car.year >= filters.minYear && car.year <= filters.maxYear;
		const matchesPrice =
			car.priceEstimate >= filters.minPrice && car.priceEstimate <= filters.maxPrice;
		const matchesMileage = car.mileage >= filters.minMileage && car.mileage <= filters.maxMileage;
		return (
			matchesQuery &&
			matchesStatus &&
			matchesFuel &&
			matchesTransmission &&
			matchesYear &&
			matchesPrice &&
			matchesMileage
		);
	});

	$: liveCount = filtered.filter((car) => car.status === 'Live').length;

	const title = 'Inventory — OpenLane';
	const description = 'Browse verified auction-ready vehicles with live bidding status, filters, and instant insights.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${SITE_URL}/inventory`} />
	<link rel="canonical" href={`${SITE_URL}/inventory`} />
</svelte:head>

<section class="mx-auto w-full max-w-6xl px-6 py-16">
	<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Inventory</p>
			<h1 class="mt-3 text-3xl font-semibold text-white">Explore vehicles ready to bid</h1>
			<p class="mt-3 text-sm text-slate-400">
				Filter by status, powertrain, and model year to spot your next auction.
			</p>
		</div>
		<Badge tone="neutral" className="border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
			{filtered.length} results
		</Badge>
	</div>

	<div class="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
		<div class="grid gap-6 md:grid-cols-2">
			{#each filtered as car}
				<CarCard {car} />
			{/each}
		</div>
		<div class="space-y-6">
			<FilterPanel {filters} defaults={defaultFilters} onUpdate={handleUpdate} onReset={handleReset} />
			<InventorySummary count={filtered.length} {liveCount} />
		</div>
	</div>
</section>
