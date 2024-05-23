<script lang="ts">
    import type { Recipe } from "$lib/models/RecipeDto";
    import { editRecipeStore } from "$lib/stores/editRecipeStore";
    import { Pencil, SquareArrowOutUpRight, Trash } from "lucide-svelte";

    export let recipe: Recipe;

    const onEdit = () => {
        $editRecipeStore = recipe;
    }
</script>

<article class="grid grid-cols-6 hover:bg-secondary hover:bg-opacity-30">
    <h2 class="col-span-3">{recipe.uuid}</h2>
    <h2 class="col-span-2">{recipe.title}</h2>
    <div class="flex gap-2">
        <a href={`/recipes/${recipe.uuid}`} title="go to page"><SquareArrowOutUpRight /></a>
        <button title="edit" on:mousedown={onEdit}><Pencil/></button>
        <button title="delete"><Trash/></button>
    </div>
</article>

<style>
    div > *:first-child { 
        @apply ml-auto;
    }

    article:nth-child(2n){
        @apply bg-secondary bg-opacity-30 hover:bg-opacity-60
    }
</style>