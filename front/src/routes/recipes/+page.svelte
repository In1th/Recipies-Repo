<script>
    import RecipeGrid  from "$lib/components/recipe/RecipeGrid.svelte";
    import { searchHandler, searchTermsRecipe, searchStore } from '$lib/components/searchbar/search';
    import { onDestroy } from 'svelte';

    // export let data;
    // const searchRecipes = searchTermsRecipe(data.recipes);
    // searchStore.set({
    //     data: searchRecipes,
    //     filtered: searchRecipes,
    //     search: ""
    // });

    // const unsubscribe = searchStore.subscribe((model) => searchHandler(model, model.search));

    // onDestroy(() => {
    //     unsubscribe();
    // });
</script>

<section class="flex flex-col justify-center items-center">
    <RecipeGrid recipes={$searchStore.filtered}/>
</section>