<script lang="ts">
	export let tabs: { id: string; label: string }[] = [];
	export let active: string;
	export let onChange: (id: string) => void;
</script>

<div class="flex flex-wrap gap-2">
	{#each tabs as tab}
		<button
			class={`rounded-full px-4 py-2 text-xs font-semibold transition ${
				active === tab.id ? 'bg-white text-slate-900' : 'border border-white/15 text-white/70'
			}`}
			on:click={() => onChange(tab.id)}
		>
			{tab.label}
		</button>
	{/each}
</div>
