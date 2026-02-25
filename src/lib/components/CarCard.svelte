<script lang="ts">
	import type { Car } from '$lib/data/cars';

	export let car: Car;
</script>

<a
	href={`/auctions/${car.id}`}
	class="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20"
>
	<div class="relative h-44 overflow-hidden">
		<img src={car.image} alt={car.name} class="h-full w-full object-cover transition group-hover:scale-105" />
		<span
			class={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
				car.status === 'Live'
					? 'bg-emerald-500/20 text-emerald-300'
					: car.status === 'Upcoming'
						? 'bg-blue-500/20 text-blue-300'
						: 'bg-slate-500/20 text-slate-200'
			}`}
		>
			{car.status}
		</span>
	</div>
	<div class="flex flex-1 flex-col gap-4 p-6">
		<div>
			<h3 class="text-base font-semibold text-white">{car.name}</h3>
			<p class="mt-2 text-xs text-slate-400">{car.location} • {car.mileage.toLocaleString()} km</p>
		</div>
		<div class="grid grid-cols-2 gap-3 text-xs text-slate-400">
			<div>
				<p class="uppercase tracking-[0.2em] text-slate-500">Estimate</p>
				<p class="mt-1 text-sm font-semibold text-white">€{car.priceEstimate.toLocaleString()}</p>
			</div>
			<div>
				<p class="uppercase tracking-[0.2em] text-slate-500">Bids</p>
				<p class="mt-1 text-sm font-semibold text-white">{car.bids}</p>
			</div>
		</div>
		<div class="flex items-center justify-between text-xs text-slate-400">
			<span>{car.fuel} • {car.transmission}</span>
			<span>⭐ {car.rating}</span>
		</div>
	</div>
</a>
