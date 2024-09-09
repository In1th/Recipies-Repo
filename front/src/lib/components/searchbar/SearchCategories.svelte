<script lang="ts">
    import { goto } from "$app/navigation";
    import { searchStore } from '$lib/components/searchbar/search';
    import { page } from '$app/stores';

    export let categories: string[];
    let selectedCategory = '';

    const search = async  (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        const cat = target.value;
        selectedCategory = cat;

        let newUrl = "";

        if ($page.url.pathname.includes('recipes/')) {
            const baseUrl = $page.url.pathname.split('/recipes/')[0];
            newUrl = `${baseUrl}/recipes?cat=${encodeURIComponent(cat)}`;
        } else {
            newUrl = `./recipes?cat=${encodeURIComponent(cat)}`;
        }

        await goto(newUrl);
        $searchStore.filtered = $searchStore.data.filter(recipe => recipe.category.name.toLowerCase() === cat.toLowerCase());
    };

</script>

<section class="flex gap-5 py-3 category-container">
    {#each categories as category}
        <button
            on:click={search}
            value={category.toLowerCase()}
            class="bg-primary-500 hover:bg-primary-300 transition rounded-lg py-1 px-4 category-link">
            {category.replaceAll("_"," ")}
        </button>
    {/each}
</section>

<style>
    .category-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;
    }

    .category-link {
        text-align: center;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s ease;
        min-width: 150px;
        text-decoration: none;
    }
</style>