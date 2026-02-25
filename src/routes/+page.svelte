<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
	import CarCard from '$lib/components/CarCard.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import { getFeaturedAuctions } from '$lib/data/auctions';
	import { SITE_URL } from '$lib/seo';

	const featured = getFeaturedAuctions(3);
	const featuredEnd = featured[0]?.endTime ?? new Date().toISOString();
	const title = 'OpenLane — Premium Car Auctions';
	const description =
		'OpenLane car auction platform with live bidding, inventory insights, and seamless checkout.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={SITE_URL} />
	<link rel="canonical" href={SITE_URL} />
</svelte:head>

<Hero {featuredEnd} />

<section class="mx-auto w-full max-w-6xl px-6 py-16">
	<SectionHeader
		eyebrow="Marketplace"
		title="Curated, high-performance inventory"
		subtitle="Every vehicle is inspected, verified, and presented with transparent bidding data so you can move fast with confidence."
	/>
	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each featured as car}
			<CarCard {car} />
		{/each}
	</div>
</section>

<section id="how" class="bg-white/5">
	<div class="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
		<StatCard label="Verified sellers" value="1,240" hint="Background checks & inspection reports" />
		<StatCard label="Live bidding" value="6.2k" hint="Active bids in the last 24 hours" />
		<StatCard label="Avg. close time" value="3.2 days" hint="Fast, frictionless auction cycles" />
	</div>
</section>

<section class="mx-auto w-full max-w-6xl px-6 py-16">
	<SectionHeader
		eyebrow="Why OpenLane"
		title="Built for serious buyers and sellers"
		subtitle="A platform designed to keep you in control with instant data, real-time alerts, and a premium concierge team."
	/>
	<div class="mt-10 grid gap-6 md:grid-cols-3">
		<Card>
			<h3 class="text-base font-semibold text-white">Real-time watchlists</h3>
			<p class="mt-2 text-sm text-slate-400">Track bids, compare vehicles, and get instant status notifications.</p>
		</Card>
		<Card>
			<h3 class="text-base font-semibold text-white">Dynamic analytics</h3>
			<p class="mt-2 text-sm text-slate-400">Get pricing trends, bid velocity metrics, and auction forecasts.</p>
		</Card>
		<Card>
			<h3 class="text-base font-semibold text-white">Concierge support</h3>
			<p class="mt-2 text-sm text-slate-400">Dedicated agents coordinate inspections, logistics, and escrow.</p>
		</Card>
	</div>
</section>
