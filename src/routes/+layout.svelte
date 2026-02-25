<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$app/paths';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>OpenLane — Premium Car Auctions</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content="OpenLane car auction platform with live bidding, inventory insights, and seamless checkout." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
	<Navigation />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
