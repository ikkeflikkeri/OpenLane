<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';

	export let open = false;
	export let user: { name: string; email: string } = { name: 'Guest', email: 'guest@openlane.com' };
	export let onClose: () => void;

	const dispatch = createEventDispatcher<{ logout: void }>();
</script>

{#if open}
	<div class="fixed inset-0 z-40 bg-slate-950/70" on:click={onClose} aria-hidden="true"></div>
	<aside
		class="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-slate-950 p-6 shadow-2xl"
	>
		<div class="flex items-start justify-between">
			<div>
				<p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Signed in as</p>
				<h3 class="mt-2 text-lg font-semibold text-white">{user.name}</h3>
				<p class="text-sm text-slate-400">{user.email}</p>
			</div>
			<button class="text-slate-400 transition hover:text-white" on:click={onClose} aria-label="Close">
				✕
			</button>
		</div>

		<div class="mt-8 grid gap-4">
			<div class="rounded-xl border border-white/10 bg-slate-900/60 p-4">
				<p class="text-xs uppercase tracking-wide text-slate-400">Watchlist</p>
				<p class="mt-2 text-sm text-white">2 active lots saved</p>
				<p class="mt-2 text-xs text-slate-400">Add vehicles to track price movement and auction alerts.</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-slate-900/60 p-4">
				<p class="text-xs uppercase tracking-wide text-slate-400">Bids</p>
				<p class="mt-2 text-sm text-white">1 live bid · 3 past bids</p>
				<p class="mt-2 text-xs text-slate-400">Review bid status and manage automatic increments.</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-slate-900/60 p-4">
				<p class="text-xs uppercase tracking-wide text-slate-400">Upcoming auctions</p>
				<p class="mt-2 text-sm text-white">Next preview: Friday at 11:00 CET</p>
				<p class="mt-2 text-xs text-slate-400">Receive reminders before bidding windows open.</p>
			</div>
		</div>

		<div class="mt-auto space-y-3">
			<Button className="w-full rounded-lg" variant="outline" on:click={onClose}>
				Account settings
			</Button>
			<Button className="w-full rounded-lg" variant="ghost" on:click={() => dispatch('logout')}>
				Log out
			</Button>
		</div>
	</aside>
{/if}
