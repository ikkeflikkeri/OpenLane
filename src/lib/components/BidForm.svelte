<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ submit: number }>();
	let bid = '';

	const handleSubmit = () => {
		const amount = Number(bid);
		if (!amount) return;
		dispatch('submit', amount);
		bid = '';
	};
</script>

<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
	<h3 class="text-sm font-semibold text-white">Place a bid</h3>
	<div class="mt-4 flex flex-col gap-3">
		<input
			class="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-brand focus:outline-none"
			placeholder="Enter bid amount"
			bind:value={bid}
			type="number"
		/>
		<button
			class="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
			on:click={handleSubmit}
		>
			Submit bid
		</button>
	</div>
	<p class="mt-3 text-xs text-slate-400">All bids are binding. Minimum increment €1,000.</p>
</div>
