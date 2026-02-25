<script lang="ts">
	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Inventory', href: '/inventory' },
		{ label: 'Live Auctions', href: '/auctions/ol-gt500' },
		{ label: 'How it works', href: '#how' }
	];
</script>

<header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
	<div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-2 text-lg font-semibold text-white">
			<span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">OL</span>
			OpenLane
		</a>
		<nav class="hidden items-center gap-6 text-sm text-slate-200 md:flex">
			{#each links as link}
				<a class="transition hover:text-white" href={link.href}>{link.label}</a>
			{/each}
		</nav>
		<div class="flex items-center gap-3">
			<button class="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
				Log in
			</button>
			<button class="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-200">
				Get started
			</button>
		</div>
	</div>
</header>
