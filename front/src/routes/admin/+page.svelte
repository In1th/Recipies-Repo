<script lang="ts">
    import { goto } from "$app/navigation";
    import DeleteDialog from "$lib/components/DeleteDialog.svelte";
    import RecipeAdminRecord from "$lib/components/recipe/RecipeAdminRecord.svelte";
    import RecipeForm from "$lib/components/recipe/RecipeForm.svelte";
    import { editRecipeStore } from "$lib/stores/editRecipeStore";
    import { Plus } from "lucide-svelte";
    import type { ActionData } from "./$types.js";
    import type { Recipe } from "$lib/models/RecipeDto.js";
    import { createDialog } from "@melt-ui/svelte";
    import RecipeAdminTable from "$lib/components/recipe/RecipeAdminTable.svelte";
    import { addSuccessToast, addErrorToast } from "$lib/components";

    export let data;

	export let form: ActionData;

    const onNew = () => {
        $editRecipeStore = undefined;
    }

    let uuid = ''

    const setOpen = (id: string) => {
        uuid = id;
    }

    const successMsg: Record<string, string> = {
        'new': 'Successfully added new recipe',
        'update': 'Successfully updated recipe',
        'delete': 'Successfully deleted recipe'
    };

    const errorMsg: Record<string, string> = {
        'new': 'Failed to add new recipe',
        'update': 'Failed to update recipe',
        'delete': 'Failed to delete recipe'
    };

    $: if (form?.success) {
        addSuccessToast('Added new recipe', successMsg[form.type]);
        $editRecipeStore = undefined;
        form = null;
    } else if (form?.success === false) {
        addErrorToast('Something went wrong', errorMsg[form.type]);
        form = null;
    }

    let searchVal = '';

    $: filtered = data.recipes.filter((r: Recipe) => r.title.toLowerCase().includes(searchVal.toLowerCase()));

</script>

<section class="flex w-full">
    <section class="flex flex-col">
        <div class="flex w-full gap-4">
            <input placeholder="Search" bind:value={searchVal}/>
            <button on:mousedown={onNew} class="flex ml-auto bg-primary-500 p-1 w-fit rounded-md shadow-lg">
                <Plus/>
            </button>
        </div>
        <RecipeAdminTable recipes={filtered} searchVal={searchVal} setOpen={setOpen} />
        <DeleteDialog recipeId={uuid}/>
    </section>
    <section class="flex flex-col items-center">
        <RecipeForm categories={data.categories}/>
    </section>
</section>

<style lang="postcss">
    section > section {
        @apply min-w-[640px] p-2;
    }
    input {
        @apply rounded-md border-[1px] border-text-500 bg-white p-1 w-full;
    }
</style>
