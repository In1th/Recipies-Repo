<script>
    import RecipeHighlight from "$lib/components/recipe/RecipeHighlight.svelte";
    import { searchHandler, searchStore, searchTermsRecipe } from "$lib/components/searchbar/search"
    import { onDestroy } from "svelte";

    export let data;
    const searchRecipes = searchTermsRecipe(data.recipes);
    searchStore.set({
        data: searchRecipes,
        filtered: searchRecipes,
        search: ""
    });

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model, model.search));

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="flex justify-center">
    <div class="grid grid-cols-3 gap-5">
        {#each $searchStore.filtered as recipe}
            <RecipeHighlight {recipe}/>
        {:else}
            <p>No recipes</p>
        {/each}
    </div>
</div>