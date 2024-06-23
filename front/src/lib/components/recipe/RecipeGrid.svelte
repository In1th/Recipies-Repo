<script lang="ts">
    import type { Recipe } from "$lib/models";
    import { createPagination } from "@melt-ui/svelte";
    import RecipeHighlight from "./RecipeHighlight.svelte";
    import Pagination from "../Pagination.svelte";

    export let recipes: Recipe[];

    const props = createPagination({
      count: recipes.length,
      perPage: 3*5,
      defaultPage: 1,
      siblingCount: 1,
    });

    const {states: {range}} = props;
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