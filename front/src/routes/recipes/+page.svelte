<script>
    import RecipeGrid  from "$lib/components/recipe/RecipeGrid.svelte";
    import { page } from '$app/stores';
    import { searchTermsRecipe, searchStore } from '$lib/components/searchbar/search';
    import { browser } from '$app/environment';

    export let data;

    if (browser) {
        const [navigation] = performance.getEntriesByType('navigation');
        if (navigation.type === 'reload') {
            const searchRecipes = searchTermsRecipe(data.recipes);
            searchStore.set({
                data: searchRecipes,
                filtered: searchRecipes,
                search: ""
            });

            const category = $page.url.searchParams.get('cat');
            if (category) {
                $searchStore.filtered = $searchStore.data.filter(recipe => {
                    return recipe.category?.name?.toLowerCase() === category.toLowerCase();
                });
            }

            const tags = $page.url.searchParams.get('tags');
            if (tags) {
                const selectedTags = tags.split(',').map(tag => tag.trim().toLowerCase());
                $searchStore.filtered = $searchStore.data.filter(recipe =>{
                    selectedTags.some(tag => recipe.tags.some(t => t.name.toLowerCase() === tag.toLowerCase()))
                });
                $searchStore.search = '';
            }
        }
    }

    $: if ( $page.url.searchParams.get('cat')) {
        const category = $page.url.searchParams.get('cat');

        $searchStore.filtered = $searchStore.data.filter(recipe => {
            return recipe.category?.name?.toLowerCase() === category.toLowerCase();
        });
    }

    $: if ( $page.url.searchParams.get('tags')) {
        const tags = $page.url.searchParams.get('tags');
        const selectedTags = tags.split(',').map(tag => tag.trim().toLowerCase());

        $searchStore.filtered = $searchStore.data.filter(recipe =>
            selectedTags.some(tag => recipe.tags.some(t => t.name.toLowerCase() === tag.toLowerCase())));

        $searchStore.search = '';
    }
</script>

<section class="flex flex-col justify-center items-center">
    <RecipeGrid recipes={$searchStore.filtered}/>
</section>