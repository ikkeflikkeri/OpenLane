<script lang="ts">
	import { page } from '$app/stores';
	import BidForm from '$lib/components/BidForm.svelte';
	import BidHistory from '$lib/components/BidHistory.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import { bidHistory, cars } from '$lib/data/cars';

	let showModal = false;
	let latestBid = 0;

	$: car = cars.find((item) => item.id === $page.params.id) ?? cars[0];

	const handleBid = (amount: number) => {
		latestBid = amount;
		showModal = true;
	};
</script>

<section class="mx-auto w-full max-w-6xl px-6 py-16">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
		<div class="space-y-6">
			<img src={car.image} alt={car.name} class="h-80 w-full rounded-3xl object-cover" />
			<Card>
				<div class="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Auction listing</p>
						<h1 class="mt-2 text-2xl font-semibold text-white">{car.name}</h1>
						<p class="mt-2 text-sm text-slate-400">{car.year} • {car.location}</p>
					</div>
					<div class="flex items-center gap-3">
						<Badge variant="success">{car.status}</Badge>
						<Countdown target={car.endTime} />
					</div>
				</div>
				<div class="mt-6 grid gap-4 text-sm text-slate-300 md:grid-cols-2">
					<Card variant="subtle" size="sm">
						<p class="text-xs uppercase tracking-[0.3em] text-slate-500">Estimate</p>
						<p class="mt-2 text-lg font-semibold text-white">€{car.priceEstimate.toLocaleString()}</p>
					</Card>
					<Card variant="subtle" size="sm">
						<p class="text-xs uppercase tracking-[0.3em] text-slate-500">Mileage</p>
						<p class="mt-2 text-lg font-semibold text-white">{car.mileage.toLocaleString()} km</p>
					</Card>
					<Card variant="subtle" size="sm">
						<p class="text-xs uppercase tracking-[0.3em] text-slate-500">Powertrain</p>
						<p class="mt-2 text-lg font-semibold text-white">{car.fuel}</p>
					</Card>
					<Card variant="subtle" size="sm">
						<p class="text-xs uppercase tracking-[0.3em] text-slate-500">Transmission</p>
						<p class="mt-2 text-lg font-semibold text-white">{car.transmission}</p>
					</Card>
				</div>
				<p class="mt-6 text-sm text-slate-400">
					This listing includes full inspection reports, service history, and a dedicated OpenLane concierge.
					Schedule a private walkthrough or request additional photos with one click.
				</p>
			</Card>
		</div>

		<div class="space-y-6">
			<Card>
				<h3 class="text-sm font-semibold text-white">Live bidding</h3>
				<div class="mt-4 space-y-3 text-sm text-slate-300">
					<div class="flex items-center justify-between">
						<span>Current bid</span>
						<span class="text-lg font-semibold text-white">€{(car.priceEstimate - 4500).toLocaleString()}</span>
					</div>
					<div class="flex items-center justify-between">
						<span>Bid increment</span>
						<span class="font-semibold text-white">€1,000</span>
					</div>
					<div class="flex items-center justify-between">
						<span>Bidders watching</span>
						<span class="font-semibold text-white">38</span>
					</div>
				</div>
			</Card>
			<BidForm on:submit={(e) => handleBid(e.detail)} />
			<BidHistory bids={bidHistory} />
		</div>
	</div>
</section>

<Modal
	open={showModal}
	title="Bid submitted"
	description={`Your bid of €${latestBid.toLocaleString()} has been queued for review.`}
	onClose={() => (showModal = false)}
/>
