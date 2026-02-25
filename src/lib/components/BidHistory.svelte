<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	export let bids: { bidder: string; amount: number; time: string }[];
	export let highlightIndex: number | null = null;
</script>

<Card>
	<h3 class="text-sm font-semibold text-white">Bid history</h3>
	<ul class="mt-4 space-y-3">
		{#each bids as bid, index}
			<li
				class={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
					highlightIndex === index
						? 'bg-emerald-500/10 text-emerald-100 ring-1 ring-emerald-400/30'
						: 'text-slate-300'
				}`}
			>
				<div>
					<p class={highlightIndex === index ? 'font-semibold text-white' : 'font-medium text-white'}>
						{bid.bidder}
					</p>
					<p class={highlightIndex === index ? 'text-xs text-emerald-200' : 'text-xs text-slate-500'}>
						{bid.time}
					</p>
				</div>
				<p class={highlightIndex === index ? 'font-semibold text-emerald-100' : 'font-semibold text-white'}>
					€{bid.amount.toLocaleString()}
				</p>
			</li>
		{/each}
	</ul>
</Card>
