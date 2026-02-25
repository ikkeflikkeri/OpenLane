<script lang="ts">
	import type { Car } from '$lib/data/cars';

	type Filters = {
		query: string;
		status: string;
		fuel: string;
		transmission: string;
		minYear: number;
		maxYear: number;
	};

	export let filters: Filters;

	export let onUpdate: (filters: Filters) => void;

	const handleInput = (key: keyof typeof filters, value: string | number) => {
		onUpdate({ ...filters, [key]: value });
	};
</script>

<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
	<h3 class="text-sm font-semibold text-white">Advanced filters</h3>
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
	<div class="mt-4 grid gap-4 text-sm md:grid-cols-2">
		<div>
			<label for="status" class="text-xs text-slate-400">Status</label>
			<select
				id="status"
				class="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white"
				value={filters.status}
				on:change={(e) => handleInput('status', (e.target as HTMLSelectElement).value)}
			>
				<option value="All">All</option>
				<option value="Live">Live</option>
				<option value="Upcoming">Upcoming</option>
				<option value="Closed">Closed</option>
			</select>
		</div>
		<div>
			<label for="fuel" class="text-xs text-slate-400">Fuel</label>
			<select
				id="fuel"
				class="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white"
				value={filters.fuel}
				on:change={(e) => handleInput('fuel', (e.target as HTMLSelectElement).value)}
			>
				<option value="All">All</option>
				<option value="Gasoline">Gasoline</option>
				<option value="Hybrid">Hybrid</option>
				<option value="Electric">Electric</option>
			</select>
		</div>
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
	</div>
</div>
