<script lang="ts">
	export let padded = true;
</script>

<div class={`rounded-2xl border border-white/10 bg-white/5 ${padded ? 'p-6' : ''}`}> <slot /> </div>
