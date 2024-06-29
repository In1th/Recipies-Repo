<script lang="ts">
    export let categories: string[];
</script>

<section class="flex gap-5 py-3">
    {#each categories as category}
        <a href="/p6/recipes?cat={category}" class="bg-primary-500 hover:bg-primary-300 transition rounded-lg py-1 px-4">
            {category}
        </a>
    {/each}
</section>