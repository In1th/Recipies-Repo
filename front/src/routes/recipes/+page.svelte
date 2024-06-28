<script>
    import RecipeGrid from "$lib/components/recipe/RecipeGrid.svelte";
    import { searchStore } from "$lib/components/searchbar/search";

</script>

<section class="flex flex-col justify-center items-center">
    <RecipeGrid recipes={$searchStore.filtered}/>
</section>
