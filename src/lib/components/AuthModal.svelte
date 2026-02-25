<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';

	export let open = false;
	export let mode: 'login' | 'signup' = 'login';
	export let onClose: () => void;

	const dispatch = createEventDispatcher<{ complete: void; switch: { mode: 'login' | 'signup' } }>();

	let name = '';
	let email = '';
	let password = '';

	const handleSubmit = () => {
		dispatch('complete');
		name = '';
		email = '';
		password = '';
	};
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6">
		<div class="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h3 class="text-lg font-semibold text-white">
						{mode === 'login' ? 'Welcome back' : 'Create your account'}
					</h3>
					<p class="mt-2 text-sm text-slate-300">
						{mode === 'login'
							? 'Sign in to manage your bids, watchlist, and saved searches.'
							: 'Join OpenLane to follow auctions and place real-time bids.'}
					</p>
				</div>
				<button
					class="text-slate-400 transition hover:text-white"
					on:click={onClose}
					aria-label="Close"
				>
					✕
				</button>
			</div>

			<div class="mt-6 flex gap-2 rounded-full border border-white/10 bg-slate-950/60 p-1 text-xs text-slate-300">
				<button
					class={`flex-1 rounded-full px-3 py-1.5 font-semibold transition ${
						mode === 'login' ? 'bg-white text-slate-900' : 'hover:text-white'
					}`}
					on:click={() => dispatch('switch', { mode: 'login' })}
				>
					Log in
				</button>
				<button
					class={`flex-1 rounded-full px-3 py-1.5 font-semibold transition ${
						mode === 'signup' ? 'bg-white text-slate-900' : 'hover:text-white'
					}`}
					on:click={() => dispatch('switch', { mode: 'signup' })}
				>
					Sign up
				</button>
			</div>

			<div class="mt-6 flex flex-col gap-3">
				{#if mode === 'signup'}
					<div>
						<label class="text-xs font-semibold uppercase tracking-wide text-slate-400">Full name</label>
						<input
							class="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-brand focus:outline-none"
							placeholder="Avery Johnson"
							bind:value={name}
							type="text"
						/>
					</div>
				{/if}
				<div>
					<label class="text-xs font-semibold uppercase tracking-wide text-slate-400">Email address</label>
					<input
						class="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-brand focus:outline-none"
						placeholder="you@openlane.com"
						bind:value={email}
						type="email"
					/>
				</div>
				<div>
					<label class="text-xs font-semibold uppercase tracking-wide text-slate-400">Password</label>
					<input
						class="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-brand focus:outline-none"
						placeholder="••••••••"
						bind:value={password}
						type="password"
					/>
				</div>
			</div>

			<Button className="mt-6 w-full rounded-lg" variant="secondary" on:click={handleSubmit}>
				{mode === 'login' ? 'Continue' : 'Create account'}
			</Button>
			<p class="mt-3 text-xs text-slate-400">
				By continuing you agree to OpenLane terms and confirm you are 18 years or older.
			</p>
		</div>
	</div>
{/if}
