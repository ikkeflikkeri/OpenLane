<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let target: string;

	let remaining = '';
	let timer: ReturnType<typeof setInterval>;

	const update = () => {
		const diff = new Date(target).getTime() - Date.now();
		if (diff <= 0) {
			remaining = 'Ended';
			return;
		}
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff / (1000 * 60)) % 60);
		const seconds = Math.floor((diff / 1000) % 60);
		remaining = `${hours}h ${minutes}m ${seconds}s`;
	};

	onMount(() => {
		update();
		timer = setInterval(update, 1000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<span class="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{remaining}</span>
