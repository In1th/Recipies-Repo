<script>
    import RecipeGrid  from "$lib/components/recipe/RecipeGrid.svelte";
    import RecipeHighlight  from "$lib/components/recipe/RecipeHighlight.svelte";


    import { searchHandler, searchTermsRecipe, searchStore } from '$lib/components/searchbar/search';
    import { onDestroy } from 'svelte';

    export let data;
    console.log("data");
    console.log(data.recipes);

    const searchRecipes = searchTermsRecipe(data.recipes);
    console.log("searchRecipes");
    console.log(searchRecipes);

    searchStore.set({
        data: searchRecipes,
        filtered: searchRecipes,
        search: ""
    });

    console.log("searchStore filtered");
    console.log($searchStore.filtered);

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model, model.search));

    onDestroy(() => {
        unsubscribe();
    });

</script>
<section class="flex flex-col justify-center items-center">
    <RecipeGrid recipes={$searchStore.filtered}/>
</section>