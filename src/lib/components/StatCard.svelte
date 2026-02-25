<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	export let label: string;
	export let value: string;
	export let hint: string;
</script>

<Card>
	<p class="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</p>
	<p class="mt-4 text-2xl font-semibold text-white">{value}</p>
	<p class="mt-2 text-xs text-slate-400">{hint}</p>
</Card>
