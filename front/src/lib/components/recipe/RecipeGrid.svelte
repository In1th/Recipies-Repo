<script lang="ts">
    import type { Recipe } from "$lib/models";
    import { createPagination } from "@melt-ui/svelte";
    import RecipeHighlight from "./RecipeHighlight.svelte";
    import Pagination from "../Pagination.svelte";

    export let recipes: Recipe[];

    // let props;
    // let range;
    // let props = createPagination({
    //   count: recipes.length,
    //   perPage: 3*5,
    //   defaultPage: 1,
    //   siblingCount: 1,
    // });

    // let {states: {range}} = props;

    let props;
    let range;

    // Reaktywnie ustawiaj paginację dopiero po załadowaniu przepisów
    $: if (recipes.length > 0) {
        props = createPagination({
            count: recipes.length,
            perPage: Math.min(15, recipes.length), // Wyświetl do 15 elementów lub mniej, jeśli mniej przepisów
            defaultPage: 1,
            siblingCount: 1,
        });

        // Pobierz zakres po zaktualizowaniu props
        range = props.states.range;
    }

    // Debugowanie zakresu
    $: if (range) {
        console.log("Aktualny zakres: start:", range.start, "end:", range.end);
        console.log("Liczba przepisów:", recipes.length);
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