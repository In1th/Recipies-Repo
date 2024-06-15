<script lang="ts">
    import { enhance } from "$app/forms";
    import type { Recipe } from "$lib/models/RecipeDto";
    import { editRecipeStore } from "$lib/stores/editRecipeStore";
    import { Pencil, SquareArrowOutUpRight, Trash } from "lucide-svelte";

    export let recipe: Recipe;
    export let onDelete: (id: string) => void;

    const onEdit = () => {
        $editRecipeStore = recipe;
    }
</script>

<form method="POST" use:enhance class="grid grid-cols-6 hover:bg-secondary hover:bg-opacity-30">
    <input name="uuid" value={recipe.uuid} class="hidden"/>
    <h2 class="col-span-3">{recipe.uuid}</h2>
    <h2 class="col-span-2">{recipe.title}</h2>
    <div class="flex gap-2">
        <a href={`/recipes/${recipe.uuid}`} title="go to page"><SquareArrowOutUpRight /></a>
        <button title="edit" on:mousedown={onEdit} type="button"><Pencil/></button>
        <button title="delete" type="button" on:mousedown={() => onDelete(recipe.uuid)}><Trash/></button>
    </div>
</form>

<style>
    div > *:first-child { 
        @apply ml-auto;
    }

    form:nth-child(2n){
        @apply bg-secondary bg-opacity-30 hover:bg-opacity-60
    }
</style>