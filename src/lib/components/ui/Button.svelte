<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let full = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';

	const variants = {
		primary: 'bg-white text-slate-900 hover:bg-slate-200',
		secondary: 'bg-brand text-white hover:bg-brand-dark',
		ghost: 'border border-white/15 text-white/80 hover:border-white/30 hover:text-white'
	};

	const sizes = {
		sm: 'px-3 py-2 text-xs',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-sm'
	};
</script>

<button
	{type}
	class={`inline-flex items-center justify-center rounded-full font-semibold transition ${sizes[size]} ${variants[variant]} ${
		full ? 'w-full' : ''
	}`}
>
	<slot />
</button>
