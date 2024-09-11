<script>
    import RecipeGrid  from "$lib/components/recipe/RecipeGrid.svelte";
    import { page } from '$app/stores';
    import { searchTermsRecipe, searchStore, searchHandler } from '$lib/components/searchbar/search';
    import { onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    export let data;

    if (browser) {
        console.log("/recipes+page.svelte IF");
        const [navigation] = performance.getEntriesByType('navigation');
        if (navigation.type === 'reload') {
            console.log("/recipes+page.svelte Strona została przeładowana.");

            const searchRecipes = searchTermsRecipe(data.recipes);
            searchStore.set({
                data: searchRecipes,
                filtered: searchRecipes,
                search: ""
            });


            const category = $page.url.searchParams.get('cat');
            if (category) {
                console.log("/recipes+page.svelte inside IF category: " + category);

                // Filtrowanie danych w searchStore na podstawie kategorii
                $searchStore.filtered = $searchStore.data.filter(recipe => {
                    return recipe.category?.name?.toLowerCase() === category.toLowerCase();
                });

                console.log("/recipes+page.svelte inside IF $searchStore.filtered: ", $searchStore.filtered);
            }
        }
    }
    // else if($page.url.searchParams.get('cat')) {
    //     console.log("/recipes+page.svelte ELSE");
    //     const category = $page.url.searchParams.get('cat');
    //     if (category) {
    //             console.log("/recipes+page.svelte inside IF category: " + category);

    //             // Filtrowanie danych w searchStore na podstawie kategorii
    //             $searchStore.filtered = $searchStore.data.filter(recipe => {
    //                 return recipe.category?.name?.toLowerCase() === category.toLowerCase();
    //             });

    //             console.log("/recipes+page.svelte inside IF $searchStore.filtered: ", $searchStore.filtered);
    //         }
    // }

    $: if ( $page.url.searchParams.get('cat')) {
        const category = $page.url.searchParams.get('cat');
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