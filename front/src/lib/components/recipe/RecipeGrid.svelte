<script lang="ts">
    import type { Recipe } from "$lib/models";
    import { createPagination } from "@melt-ui/svelte";
    import RecipeHighlight from "./RecipeHighlight.svelte";
    import Pagination from "../Pagination.svelte";

    export let recipes: Recipe[];

    let props;
    let range;

    $: if (recipes.length > 0) {
        props = createPagination({
            count: recipes.length,
            perPage: Math.min(15, recipes.length),
            defaultPage: 1,
            siblingCount: 1,
        });

        range = props.states.range;
    }
</script>

<Pagination props={props} />
<div class="grid grid-cols-3 gap-5 py-4">
    {#each recipes.slice($range.start, $range.end) as recipe}
        <RecipeHighlight recipe={recipe}/>
    {:else}
        <h1 class="text-center">No recipes</h1>
    {/each}
</div>
<Pagination props={props} />