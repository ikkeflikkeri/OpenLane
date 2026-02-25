<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$app/paths';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE_NAME } from '$lib/seo';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
	<Navigation />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
