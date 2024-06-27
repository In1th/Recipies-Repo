<script lang="ts">
    import { createPagination } from "@melt-ui/svelte";
    import RecipeAdminRecord from "./RecipeAdminRecord.svelte";
    import type { Recipe } from "$lib/models";
    import Pagination from "../Pagination.svelte";

    export let recipes: Recipe[]
    export let searchVal: string;
    export let setOpen: (id: string) => void;
    export let perPage = 20;

    const props = createPagination({
      count: recipes.length,
      perPage,
      defaultPage: 1,
      siblingCount: 1,
    });

    const {states: {range}} = props;
</script>

<div class="grid grid-cols-6 border-b border-text-500 pt-3 px-2">
    <h2 class="col-span-3">Title</h2>
    <h2 class="text-center">Rating</h2>
    <h2 class="text-center">Comments</h2>
    <span/>
</div>
<div class="min-h-[480px]">
    {#each recipes.slice($range.start, $range.end) as recipe}
        <RecipeAdminRecord recipe={recipe} onDelete={setOpen} />
    {:else}
        <p>{searchVal ? 'No results' : 'No recipes'}</p>
    {/each}
</div>
<Pagination props={props} />