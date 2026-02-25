<script lang="ts">
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
			<button
				class="mt-6 w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900"
				on:click={onClose}
			>
				Close
			</button>
		</div>
	</div>
{/if}
