<script lang="ts">
	export let count: number;
	export let liveCount: number;
</script>

<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
	<h3 class="text-sm font-semibold text-white">Inventory insights</h3>
	<div class="mt-4 grid gap-4 text-sm text-slate-300">
		<div class="flex items-center justify-between">
			<span>Total vehicles</span>
			<span class="font-semibold text-white">{count}</span>
		</div>
		<div class="flex items-center justify-between">
			<span>Live auctions</span>
			<span class="font-semibold text-emerald-300">{liveCount}</span>
		</div>
		<div class="flex items-center justify-between">
			<span>Avg. bid activity</span>
			<span class="font-semibold text-white">+18% WoW</span>
		</div>
		<div class="flex items-center justify-between">
			<span>Buyer satisfaction</span>
			<span class="font-semibold text-white">4.8 / 5</span>
		</div>
	</div>
</div>
