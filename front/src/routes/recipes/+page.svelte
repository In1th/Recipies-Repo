<script>
    export let data;
</script>

<div class="flex flex-col">
    {#if data.recipe}
        <div>{@html data.recipe}</div>
        <p>Metadata: {data.metadata}</p>
    {:else}
        <p>No recipe found.</p>
    {/if}
</div>