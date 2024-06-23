<script lang="ts">
    import Showdown from 'showdown';

    type Recipe = {
        file: string;
        content: string;
    };

    export let data: { recipes: Recipe[] };

    const converter = new Showdown.Converter();
</script>

<div class="flex flex-col">
    {#if data.recipes.length > 0}
        {#each data.recipes as recipe}
            <div class="recipe">
                <h2>{recipe.file.replace('.md', '')}</h2>
                <div>{@html converter.makeHtml(recipe.content)}</div>
            </div>
        {/each}
    {:else}
        <p>No recipes found.</p>
    {/if}
</div>

<style>
    .recipe {
        margin-bottom: 2em;
    }
    h2 {
        margin-bottom: 0.5em;
    }
</style>
