<script lang="ts">
    import type { Recipe } from "$lib/models";
    import RecipeHighlight from "./RecipeHighlight.svelte";

    export let recipes: Recipe[];
</script>

<div class="grid grid-cols-3 gap-5">
    {#each recipes as recipe}
        <RecipeHighlight recipe={recipe}/>
    {:else}
        <h1 class="text-center">No recipes</h1>
    {/each}
</div>