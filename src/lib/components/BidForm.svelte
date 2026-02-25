<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	const dispatch = createEventDispatcher<{ submit: number }>();
	let bid = '';

	const handleSubmit = () => {
		const amount = Number(bid);
		if (!amount) return;
		dispatch('submit', amount);
		bid = '';
	};
</script>

<Card>
	<h3 class="text-sm font-semibold text-white">Place a bid</h3>
	<div class="mt-4 flex flex-col gap-3">
		<input
			class="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-brand focus:outline-none"
			placeholder="Enter bid amount"
			bind:value={bid}
			type="number"
		/>
		<Button className="w-full rounded-lg" on:click={handleSubmit}>
			Submit bid
		</Button>
	</div>
	<p class="mt-3 text-xs text-slate-400">All bids are binding. Minimum increment €1,000.</p>
</Card>
