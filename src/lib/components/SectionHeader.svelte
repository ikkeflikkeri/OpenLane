<script lang="ts">
	export let eyebrow: string;
	export let title: string;
	export let subtitle: string;
</script>

<div class="text-center">
	<p class="text-xs font-semibold uppercase tracking-[0.4em] text-brand">{eyebrow}</p>
	<h2 class="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
	<p class="mx-auto mt-3 max-w-2xl text-sm text-slate-400 md:text-base">{subtitle}</p>
</div>
