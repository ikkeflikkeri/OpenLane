<script lang="ts">
	import CarCard from '$lib/components/CarCard.svelte';
	import FilterPanel from '$lib/components/FilterPanel.svelte';
	import InventorySummary from '$lib/components/InventorySummary.svelte';
	import { cars } from '$lib/data/cars';

	let filters = {
		query: '',
		status: 'All',
		fuel: 'All',
		transmission: 'All',
		minYear: 2018,
		maxYear: 2024
	};

	const handleUpdate = (next: typeof filters) => {
		filters = next;
	};

	$: filtered = cars.filter((car) => {
		const matchesQuery =
			filters.query.length === 0 ||
			`${car.name} ${car.location} ${car.year}`.toLowerCase().includes(filters.query.toLowerCase());
		const matchesStatus = filters.status === 'All' || car.status === filters.status;
		const matchesFuel = filters.fuel === 'All' || car.fuel === filters.fuel;
		const matchesTransmission =
			filters.transmission === 'All' || car.transmission === filters.transmission;
		const matchesYear = car.year >= filters.minYear && car.year <= filters.maxYear;
		return matchesQuery && matchesStatus && matchesFuel && matchesTransmission && matchesYear;
	});

	$: liveCount = filtered.filter((car) => car.status === 'Live').length;
</script>

<section class="mx-auto w-full max-w-6xl px-6 py-16">
	<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Inventory</p>
			<h1 class="mt-3 text-3xl font-semibold text-white">Explore vehicles ready to bid</h1>
			<p class="mt-3 text-sm text-slate-400">
				Filter by status, powertrain, and model year to spot your next auction.
			</p>
		</div>
		<div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
			{filtered.length} results
		</div>
	</div>

	<div class="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
		<div class="grid gap-6 md:grid-cols-2">
			{#each filtered as car}
				<CarCard {car} />
			{/each}
		</div>
		<div class="space-y-6">
			<FilterPanel {filters} onUpdate={handleUpdate} />
			<InventorySummary count={filtered.length} {liveCount} />
		</div>
	</div>
</section>
