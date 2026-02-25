<script lang="ts">
	export let bids: { bidder: string; amount: number; time: string }[];
</script>

<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
	<h3 class="text-sm font-semibold text-white">Bid history</h3>
	<ul class="mt-4 space-y-3">
		{#each bids as bid}
			<li class="flex items-center justify-between text-sm text-slate-300">
				<div>
					<p class="font-medium text-white">{bid.bidder}</p>
					<p class="text-xs text-slate-500">{bid.time}</p>
				</div>
				<p class="font-semibold text-white">€{bid.amount.toLocaleString()}</p>
			</li>
		{/each}
	</ul>
</div>
