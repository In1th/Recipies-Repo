<script>
    export let data;
</script>

<div class="flex flex-col">
    <!--<div>{@html  data.recipe}</div>-->
    {#each data.recipes as recipe}
        <a href={`/recipes/${recipe.uuid}`}>{recipe.title}</a>
    {/each}
</div>