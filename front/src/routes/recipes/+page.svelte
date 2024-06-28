<script>
    import RecipeGrid from "$lib/components/recipe/RecipeGrid.svelte";
    import { searchHandler, searchStore, searchTermsRecipe } from "$lib/components/searchbar/search";
    import { page } from '$app/stores';

    //export let data;
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

    const tags = $page.url.searchParams.get('tags')?.split(',') || [];
    // Filtrowanie przepisów na podstawie tagów
    const filteredRecipes = tags.length
    ? $searchStore.data.filter(recipe => tags.every(tag => recipe.tags.some(t => t.name.toLowerCase() === tag.toLowerCase())))
    : $searchStore.data;


</script>

<section class="flex flex-col justify-center items-center">
    <RecipeGrid recipes={filteredRecipes}/>
</section>
