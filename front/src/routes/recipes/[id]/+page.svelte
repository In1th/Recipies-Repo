<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="mx-16 markdown">
	<svelte:component this={data.content} />
</section>