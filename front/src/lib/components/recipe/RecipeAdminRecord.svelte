<script lang="ts">
    import { enhance } from "$app/forms";
    import type { Recipe } from "$lib/models/";
    import { editRecipeStore } from "$lib/stores/";
    import { melt } from "@melt-ui/svelte";
    import { Pencil, SquareArrowOutUpRight, Trash } from "lucide-svelte";
    import { deleteDialogTrigger } from "../DeleteDialog.svelte";
    import { faker } from "@faker-js/faker";

    export let recipe: Recipe;
    export let onDelete: (id: string) => void;

    const onEdit = () => {
        $editRecipeStore = recipe;
    };
</script>

<form method="POST" use:enhance class="grid grid-cols-6 hover:bg-secondary-500 hover:bg-opacity-30 px-2">
    <input name="uuid" value={recipe.uuid} class="hidden"/>
    <h2 class="col-span-3 text-nowrap overflow-hidden text-ellipsis whitespace-nowrap" title={recipe.title}>{recipe.title}</h2>
    <div class="text-center">{faker.number.float({min: 1.0, max: 5.0, fractionDigits: 2})}</div>
    <div class="text-center">{faker.number.int({min: 1, max: 100})}</div>
    <div class="flex gap-2">
        <a href={`/p6/recipes/${recipe.uuid}`} title="go to page"><SquareArrowOutUpRight /></a>
        <button title="edit" on:mousedown={onEdit} type="button"><Pencil/></button>
        <button title="delete" type="button" use:melt={$deleteDialogTrigger} on:mousedown={() => onDelete(recipe.uuid)}><Trash/></button>
    </div>
</form>

<style lang="postcss">
    div > *:first-child { 
        @apply ml-auto;
    }

    form:nth-child(2n){
        @apply bg-secondary-500 bg-opacity-30 hover:bg-opacity-60
    }
</style>