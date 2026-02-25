<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	export type Filters = {
		query: string;
		status: string[];
		fuel: string[];
		transmission: string;
		minYear: number;
		maxYear: number;
		minPrice: number;
		maxPrice: number;
		minMileage: number;
		maxMileage: number;
	};

	export let filters: Filters;
	export let defaults: Filters;
	export let onUpdate: (filters: Filters) => void;
	export let onReset: () => void;

	const handleInput = (key: keyof typeof filters, value: string | number) => {
		onUpdate({ ...filters, [key]: value });
	};

	const toggleMulti = (key: 'status' | 'fuel', value: string) => {
		const current = new Set(filters[key]);
		if (current.has(value)) {
			current.delete(value);
		} else {
			current.add(value);
		}
		onUpdate({ ...filters, [key]: Array.from(current) });
	};

	$: activeCount = [
		filters.query.trim().length > 0,
		filters.status.length > 0,
		filters.fuel.length > 0,
		filters.transmission !== defaults.transmission,
		filters.minYear !== defaults.minYear || filters.maxYear !== defaults.maxYear,
		filters.minPrice !== defaults.minPrice || filters.maxPrice !== defaults.maxPrice,
		filters.minMileage !== defaults.minMileage || filters.maxMileage !== defaults.maxMileage
	].filter(Boolean).length;
</script>

<Card>
	<div class="flex items-center justify-between">
		<h3 class="text-sm font-semibold text-white">Advanced filters</h3>
		{#if activeCount > 0}
			<Badge tone="neutral" className="border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-slate-200">
				{activeCount} active
			</Badge>
		{/if}
	</div>
	<div class="mt-4 grid gap-4 text-sm">
		<label for="search" class="text-xs text-slate-400">Search</label>
		<input
			id="search"
			class="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-brand focus:outline-none"
			placeholder="Search by model, year, or location"
			value={filters.query}
			on:input={(e) => handleInput('query', (e.target as HTMLInputElement).value)}
		/>
	</div>
	<div class="mt-4 grid gap-4 text-sm">
		<div>
			<label class="text-xs text-slate-400">Status</label>
			<div class="mt-2 flex flex-wrap gap-2">
				{#each ['Live', 'Upcoming', 'Closed'] as option}
					<button
						type="button"
						class={`rounded-full border px-3 py-1 text-xs transition ${
							filters.status.includes(option)
								? 'border-brand bg-brand/20 text-white'
								: 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/30'
						}`}
						on:click={() => toggleMulti('status', option)}
					>
						{option}
					</button>
				{/each}
			</div>
			<p class="mt-2 text-[11px] text-slate-500">Leave empty to include all statuses.</p>
		</div>
		<div>
			<label class="text-xs text-slate-400">Fuel</label>
			<div class="mt-2 flex flex-wrap gap-2">
				{#each ['Gasoline', 'Hybrid', 'Electric'] as option}
					<button
						type="button"
						class={`rounded-full border px-3 py-1 text-xs transition ${
							filters.fuel.includes(option)
								? 'border-brand bg-brand/20 text-white'
								: 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/30'
						}`}
						on:click={() => toggleMulti('fuel', option)}
					>
						{option}
					</button>
				{/each}
			</div>
			<p class="mt-2 text-[11px] text-slate-500">Select one or more powertrains.</p>
		</div>
	</div>
	<div class="mt-4 grid gap-4 text-sm sm:grid-cols-2">
		<div>
			<label for="transmission" class="text-xs text-slate-400">Transmission</label>
			<select
				id="transmission"
				class="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white"
				value={filters.transmission}
				on:change={(e) => handleInput('transmission', (e.target as HTMLSelectElement).value)}
			>
				<option value="All">All</option>
				<option value="Automatic">Automatic</option>
				<option value="Manual">Manual</option>
			</select>
		</div>
		<div>
			<label for="year-min" class="text-xs text-slate-400">Year range</label>
			<div class="mt-2 flex gap-2">
				<input
					id="year-min"
					type="number"
					class="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white"
					value={filters.minYear}
					on:input={(e) => handleInput('minYear', Number((e.target as HTMLInputElement).value))}
				/>
				<input
					id="year-max"
					type="number"
					class="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white"
					value={filters.maxYear}
					on:input={(e) => handleInput('maxYear', Number((e.target as HTMLInputElement).value))}
				/>
			</div>
		</div>
		<div>
			<label for="price-min" class="text-xs text-slate-400">Price range (€)</label>
			<div class="mt-2 flex gap-2">
				<input
					id="price-min"
					type="number"
					class="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white"
					value={filters.minPrice}
					on:input={(e) => handleInput('minPrice', Number((e.target as HTMLInputElement).value))}
				/>
				<input
					id="price-max"
					type="number"
					class="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white"
					value={filters.maxPrice}
					on:input={(e) => handleInput('maxPrice', Number((e.target as HTMLInputElement).value))}
				/>
			</div>
		</div>
		<div>
			<label for="mileage-min" class="text-xs text-slate-400">Mileage range (km)</label>
			<div class="mt-2 flex gap-2">
				<input
					id="mileage-min"
					type="number"
					class="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white"
					value={filters.minMileage}
					on:input={(e) => handleInput('minMileage', Number((e.target as HTMLInputElement).value))}
				/>
				<input
					id="mileage-max"
					type="number"
					class="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white"
					value={filters.maxMileage}
					on:input={(e) => handleInput('maxMileage', Number((e.target as HTMLInputElement).value))}
				/>
			</div>
		</div>
	</div>
	<div class="mt-5 flex flex-wrap items-center justify-between gap-3">
		<p class="text-[11px] text-slate-500">Filters update instantly as you refine the list.</p>
		<button
			type="button"
			class="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-200 transition hover:border-white/30"
			on:click={onReset}
		>
			Clear filters
		</button>
	</div>
</Card>
