<script lang="ts">
	export let tone: 'emerald' | 'blue' | 'slate' | 'brand' | 'neutral' | 'success' = 'slate';
	export let class: string = '';

	const tones = {
		emerald: 'bg-emerald-500/20 text-emerald-300',
		blue: 'bg-blue-500/20 text-blue-300',
		slate: 'bg-slate-500/20 text-slate-200',
		brand: 'bg-brand/20 text-brand',
		neutral: 'bg-white/10 text-slate-200',
		success: 'bg-emerald-500/20 text-emerald-200'
	};
</script>

<span class={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${class}`}> <slot /> </span>
