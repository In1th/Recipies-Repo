<script>
    import RecipeGrid  from "$lib/components/recipe/RecipeGrid.svelte";
    import { page } from '$app/stores';
    import { searchTermsRecipe, searchStore, searchHandler } from '$lib/components/searchbar/search';
    import { browser } from '$app/environment';

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
                console.log("/recipes+page.svelte inside IF category: ", category);

                $searchStore.filtered = $searchStore.data.filter(recipe => {
                    return recipe.category?.name?.toLowerCase() === category.toLowerCase();
                });

                console.log("/recipes+page.svelte inside IF cat $searchStore.filtered: ", $searchStore.filtered);
            }

            const tags = $page.url.searchParams.get('tags');
            if (tags) {
                console.log("/recipes+page.svelte inside IF tags: ", tags);
                const selectedTags = tags.split(',').map(tag => tag.trim().toLowerCase());
                $searchStore.filtered = $searchStore.data.filter(recipe =>{
                    selectedTags.some(tag => recipe.tags.some(t => t.name.toLowerCase() === tag.toLowerCase()))
                });

                $searchStore.search = '';

                console.log("/recipes+page.svelte inside IF tags $searchStore.filtered: ", $searchStore.filtered);
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

        $searchStore.filtered = $searchStore.data.filter(recipe => {
            return recipe.category?.name?.toLowerCase() === category.toLowerCase();
        });

        console.log("/recipes+page.svelte inside IF $searchStore.filtered: ", $searchStore.filtered);
    }

    $: if ( $page.url.searchParams.get('tags')) {
        const tags = $page.url.searchParams.get('tags');
        console.log("/recipes+page.svelte inside IF tags: " + tags);
        const selectedTags = tags.split(',').map(tag => tag.trim().toLowerCase());

        $searchStore.filtered = $searchStore.data.filter(recipe =>
            selectedTags.some(tag => recipe.tags.some(t => t.name.toLowerCase() === tag.toLowerCase())));

        $searchStore.search = '';

        console.log("/recipes+page.svelte inside IF tags $searchStore.filtered: ", $searchStore.filtered);
    }

</script>

<section class="flex flex-col justify-center items-center">
    <div>/recipes page</div>
    <RecipeGrid recipes={$searchStore.filtered}/>
</section>