<script>
    export let data;
</script>

<div class="flex flex-col">
    {#each data.recipes as recipe}
        <a href={`/recipes/${recipe.uuid}`}>{recipe.title}</a>
    {:else}
        <p>No recipes</p>
    {/each}
</div>