<script lang="ts">
	export let images: string[] = [];
	let activeIndex = 0;

	const select = (index: number) => {
		activeIndex = index;
	};
</script>

<div class="space-y-4">
	<div class="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
		<img
			class="h-80 w-full object-cover"
			src={images[activeIndex]}
			alt={`Gallery image ${activeIndex + 1}`}
		/>
	</div>
	<div class="flex gap-3 overflow-x-auto pb-1">
		{#each images as image, index}
			<button
				class={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border ${
					index === activeIndex ? 'border-brand' : 'border-white/10'
				}`}
				on:click={() => select(index)}
			>
				<img class="h-full w-full object-cover" src={image} alt={`Thumbnail ${index + 1}`} />
			</button>
		{/each}
	</div>
</div>
