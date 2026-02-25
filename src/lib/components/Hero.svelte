<script lang="ts">
	import Countdown from '$lib/components/Countdown.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	export let featuredEnd: string;
</script>

<section class="relative overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_55%)]"></div>
	<div class="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Live auctions</p>
			<h1 class="mt-4 text-4xl font-semibold text-white md:text-5xl">
				Bid on elite performance cars with real-time clarity.
			</h1>
			<p class="mt-5 text-sm text-slate-300 md:text-base">
				OpenLane connects verified sellers with serious buyers through curated listings, transparent bidding,
				and concierge-level support.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-4">
				<Button variant="secondary" className="px-6 py-3 text-xs">
					Browse inventory
				</Button>
				<Button variant="outline" className="px-6 py-3 text-xs">
					Become a seller
				</Button>
			</div>
			<div class="mt-10 flex items-center gap-6 text-xs text-slate-400">
				<div>
					<p class="text-white">Next auction ends in</p>
					<Countdown target={featuredEnd} />
				</div>
				<div class="h-10 w-px bg-white/10"></div>
				<div>
					<p class="text-white">Verified vehicles</p>
					<p class="text-sm font-semibold text-white">92% sell-through</p>
				</div>
			</div>
		</div>
		<div class="relative">
			<div class="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand/30 to-transparent blur-3xl"></div>
			<img
				class="relative h-full w-full rounded-3xl object-cover shadow-2xl"
				src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
				alt="Featured auction car"
			/>
		</div>
	</div>
</section>
