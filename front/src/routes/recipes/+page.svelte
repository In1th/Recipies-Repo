<script lang="ts">
    import { searchHandler, searchStore } from "$lib/components/searchbar/search"
    import { onDestroy } from "svelte";

    export let data: any;

    const searchRecipes = data.recipes.map((recipe: { title: any; tags: any }) => ({
        ...recipe,
        searchTerms: `${recipe.title} ${recipe.tags}`
    }));

    // Ustawienie danych w store
    searchStore.set({
        data: searchRecipes,
        filtered: searchRecipes,
        search: ""
    });

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    });

</script>

<div class="flex flex-col">
    <pre>{JSON.stringify($searchStore.filtered, null, 2)}</pre>
</div>

<style>
    .recipe {
        margin-bottom: 2em;
    }
    h2 {
        margin-bottom: 0.5em;
    }
</style>
