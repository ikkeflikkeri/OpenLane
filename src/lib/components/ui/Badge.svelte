<script lang="ts">
	export let tone: 'emerald' | 'blue' | 'slate' | 'brand' = 'slate';

	const tones = {
		emerald: 'bg-emerald-500/20 text-emerald-300',
		blue: 'bg-blue-500/20 text-blue-300',
		slate: 'bg-slate-500/20 text-slate-200',
		brand: 'bg-brand/20 text-brand'
	};
</script>

<span class={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}> <slot /> </span>
