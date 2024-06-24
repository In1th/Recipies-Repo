<script>
    import RecipeGrid from "$lib/components/recipe/RecipeGrid.svelte";

    export let data;
</script>
<section class="flex flex-col justify-center items-center">
    <RecipeGrid recipes={data.recipes}/>
</section>