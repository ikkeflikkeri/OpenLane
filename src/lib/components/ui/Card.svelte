<script lang="ts">
	export let padded = true;
	export let variant: 'default' | 'subtle' = 'default';
	export let size: 'sm' | 'md' = 'md';
	export let class: string = '';

	const variants = {
		default: 'border border-white/10 bg-white/5',
		subtle: 'border border-white/10 bg-slate-900/60'
	};

	const sizes = {
		sm: 'p-4',
		md: 'p-6'
	};
</script>

<div class={`rounded-2xl ${variants[variant]} ${padded ? sizes[size] : ''} ${class}`}> <slot /> </div>
