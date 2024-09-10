<script>
    import RecipeGrid  from "$lib/components/recipe/RecipeGrid.svelte";
    import { page } from '$app/stores';
    import { searchTermsRecipe, searchStore, searchHandler } from '$lib/components/searchbar/search';
    import { onDestroy } from 'svelte';

    export let data;
    const searchRecipes = searchTermsRecipe(data.recipes);
    searchStore.set({
        data: searchRecipes,
        filtered: [],
        search: ""
    });


    $: category = $page.url.searchParams.get('cat');
    $: if (category) {
        console.log("/recipes+page.svelte inside IF category: " + category);

        // Filtrowanie danych w searchStore na podstawie kategorii
        $searchStore.filtered = $searchStore.data.filter(recipe => {
            return recipe.category?.name?.toLowerCase() === category.toLowerCase();
        });

        console.log("/recipes+page.svelte inside IF $searchStore.filtered: ", $searchStore.filtered);
    }


</script>

<section class="flex flex-col justify-center items-center">
    <div>/recipes page</div>
    <RecipeGrid recipes={$searchStore.filtered}/>
</section>