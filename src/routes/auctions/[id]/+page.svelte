<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import BidForm from '$lib/components/BidForm.svelte';
	import BidHistory from '$lib/components/BidHistory.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import MediaGallery from '$lib/components/MediaGallery.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Tabs from '$lib/components/ui/Tabs.svelte';
	import { getAuctionById, getAuctions, getBidsForAuction, getUserById } from '$lib/data/auctions';
	import { SITE_URL } from '$lib/seo';

	let showModal = false;
	let latestBid = 0;
	let activeTab = 'overview';
	let bidHistory: { bidder: string; amount: number; time: string }[] = [];
	let currentBid = 0;
	let liveBids: { bidder: string; amount: number; time: string }[] = [];
	let highlightCurrentBid = false;
	let highlightIndex: number | null = null;

	const tabOptions = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'specs', label: 'Specs' },
		{ id: 'history', label: 'History' }
	];

	const bidders = [
		'DriveMax Capital',
		'Apex Auto Fund',
		'Velocity Collective',
		'Nordic Motors',
		'Summit Auto Group',
		'Atlas Performance',
		'Valencia Classics'
	];

	const auctions = getAuctions();

	const formatBids = (auctionId: string) =>
		getBidsForAuction(auctionId).map((bid) => ({
			bidder: getUserById(bid.bidderId)?.name ?? 'Private Bidder',
			amount: bid.amount,
			time: bid.time
		}));

	$: car = getAuctionById($page.params.id) ?? auctions[0];
	$: bidHistory = car ? formatBids(car.id) : [];
	$: currentBid = currentBid || car.currentBid;
	$: if (bidHistory.length > 0 && liveBids.length === 0) {
		liveBids = bidHistory;
	}
	$: title = `${car?.name ?? 'Auction listing'} — OpenLane`;
	$: description = `Live auction for ${car?.year ?? ''} ${car?.name ?? 'a premium vehicle'} in ${car?.location ?? 'OpenLane'}.`;
	$: pageUrl = `${SITE_URL}/auctions/${car?.id ?? ''}`;

	const handleBid = (amount: number) => {
		latestBid = amount;
		showModal = true;
	};

	const pulseHighlights = () => {
		highlightCurrentBid = true;
		highlightIndex = 0;
		setTimeout(() => {
			highlightCurrentBid = false;
			highlightIndex = null;
		}, 1400);
	};

	onMount(() => {
		currentBid = car.currentBid;
		if (liveBids.length === 0) {
			liveBids = bidHistory;
		}
		const interval = setInterval(() => {
			const increment = 1000 * (1 + Math.floor(Math.random() * 3));
			const nextBid = currentBid + increment;
			const bidder = bidders[Math.floor(Math.random() * bidders.length)];
			const nextEntry = {
				bidder,
				amount: nextBid,
				time: 'Just now'
			};

			currentBid = nextBid;
			liveBids = [nextEntry, ...liveBids].slice(0, 5);
			pulseHighlights();
		}, 5200);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={pageUrl} />
	<link rel="canonical" href={pageUrl} />
</svelte:head>

<section class="mx-auto w-full max-w-6xl px-6 py-16">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
		<div class="space-y-6">
			<MediaGallery images={car.gallery} />
			<Card>
				<div class="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Auction listing</p>
						<h1 class="mt-2 text-2xl font-semibold text-white">{car.name}</h1>
						<p class="mt-2 text-sm text-slate-400">{car.year} • {car.location}</p>
					</div>
					<div class="flex items-center gap-3">
						<Badge tone="success">{car.status}</Badge>
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
				<div class="mt-8 space-y-4">
					<Tabs tabs={tabOptions} active={activeTab} onChange={(id) => (activeTab = id)} />
					{#if activeTab === 'overview'}
						<p class="text-sm text-slate-400">
							This listing includes full inspection reports, service history, and a dedicated OpenLane
							concierge. Schedule a private walkthrough or request additional photos with one click.
						</p>
					{:else if activeTab === 'specs'}
						<div class="grid gap-3 text-sm text-slate-300">
							<div class="flex items-center justify-between">
								<span>Drivetrain</span>
								<span class="text-white">AWD Performance</span>
							</div>
							<div class="flex items-center justify-between">
								<span>Horsepower</span>
								<span class="text-white">720 hp</span>
							</div>
							<div class="flex items-center justify-between">
								<span>0-100 km/h</span>
								<span class="text-white">3.1s</span>
							</div>
							<div class="flex items-center justify-between">
								<span>Top speed</span>
								<span class="text-white">320 km/h</span>
							</div>
						</div>
					{:else}
						<ul class="space-y-3 text-sm text-slate-400">
							<li>2024-11-14 — Full inspection completed (OpenLane certified)</li>
							<li>2024-07-05 — Ceramic coating applied, interior refreshed</li>
							<li>2024-03-19 — Major service completed at authorized dealer</li>
						</ul>
					{/if}
				</div>
			</Card>
		</div>

		<div class="space-y-6">
			<Card>
				<h3 class="text-sm font-semibold text-white">Live bidding</h3>
				<div class="mt-4 space-y-3 text-sm text-slate-300">
					<div class="flex items-center justify-between">
						<span>Current bid</span>
						<span
							class={`text-lg font-semibold transition ${
								highlightCurrentBid
									? 'text-emerald-100 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]'
									: 'text-white'
							}`}
						>
							€{currentBid.toLocaleString()}
						</span>
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
			<BidHistory bids={liveBids} highlightIndex={highlightIndex} />
		</div>
	</div>
</section>

<Modal
	open={showModal}
	title="Bid submitted"
	description={`Your bid of €${latestBid.toLocaleString()} has been queued for review.`}
	onClose={() => (showModal = false)}
/>
