<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import AuthModal from '$lib/components/AuthModal.svelte';
	import ProfileDrawer from '$lib/components/ProfileDrawer.svelte';

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Inventory', href: '/inventory' },
		{ label: 'Live Auctions', href: '/auctions/ol-gt500' },
		{ label: 'How it works', href: '#how' }
	];

	let authModalOpen = false;
	let authMode: 'login' | 'signup' = 'login';
	let profileOpen = false;
	let isAuthenticated = false;

	const user = {
		name: 'Avery Johnson',
		email: 'avery@openlane.com'
	};

	const openAuth = (mode: 'login' | 'signup') => {
		authMode = mode;
		authModalOpen = true;
	};

	const handleAuthComplete = () => {
		isAuthenticated = true;
		authModalOpen = false;
	};

	const handleLogout = () => {
		isAuthenticated = false;
		profileOpen = false;
	};
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
			{#if isAuthenticated}
				<Button variant="ghost" size="sm" className="hidden md:inline-flex" on:click={() => (profileOpen = true)}>
					Watchlist
				</Button>
				<button
					class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition hover:bg-white/20"
					on:click={() => (profileOpen = true)}
					aria-label="Open profile drawer"
				>
					AJ
				</button>
			{:else}
				<Button variant="outline" size="sm" on:click={() => openAuth('login')}>Log in</Button>
				<Button variant="secondary" size="sm" on:click={() => openAuth('signup')}>Get started</Button>
			{/if}
		</div>
	</div>

	<AuthModal
		open={authModalOpen}
		mode={authMode}
		onClose={() => (authModalOpen = false)}
		on:complete={handleAuthComplete}
		on:switch={(event) => (authMode = event.detail.mode)}
	/>
	<ProfileDrawer
		open={profileOpen}
		{user}
		onClose={() => (profileOpen = false)}
		on:logout={handleLogout}
	/>
</header>
