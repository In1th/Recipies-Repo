<script lang="ts">
    export let categories: string[];
</script>

<section class="flex gap-5 py-3 category-container">
    {#each categories as category}
        <a href="/recipes?cat={category}" class="bg-primary-500 hover:bg-primary-300 transition rounded-lg py-1 px-4 category-link">
            {category.replaceAll("_"," ")}
        </a>
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