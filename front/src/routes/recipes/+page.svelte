<script>
    import RecipeHighlight from "$lib/components/recipe/RecipeHighlight.svelte";

    export let data;
</script>

<div class="flex justify-center">
    <div class="grid grid-cols-3 gap-5">
        {#each data.recipes as recipe}
            <RecipeHighlight recipe={recipe}/>
        {:else}
            <p>No recipes</p>
        {/each}
    </div>
</div>