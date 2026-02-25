<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	export let title: string;
	export let description: string;
	export let open = false;
	export let onClose: () => void;
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6">
		<div class="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl">
			<h3 class="text-lg font-semibold text-white">{title}</h3>
			<p class="mt-3 text-sm text-slate-300">{description}</p>
			<Button className="mt-6 w-full rounded-lg" variant="secondary" on:click={onClose}>
				Close
			</Button>
		</div>
	</div>
{/if}
