<script lang="ts">
    import { goto } from "$app/navigation";
    import DeleteDialog from "$lib/components/DeleteDialog.svelte";
    import RecipeAdminRecord from "$lib/components/RecipeAdminRecord.svelte";
    import RecipeForm from "$lib/components/RecipeForm.svelte";
    import { editRecipeStore } from "$lib/stores/editRecipeStore";
    import { Plus } from "lucide-svelte";
    import type { ActionData } from "./$types.js";
    import { addErrorToast, addSuccessToast } from "$lib/stores/toasterStore.js";

    export let data;

	export let form: ActionData;
    
    // onMount(() => {
    //     if (!data.session){
    //         goto('/');
    //         return;
    //     }
    // })

    const onNew = () => {
        $editRecipeStore = undefined;
    }

    let open = false;
    let uuid = ''

    const setOpen = (id: string) => {
        open = true;
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
</script>

<section class="flex w-full">
    <section class="flex flex-col">
        <button on:mousedown={onNew} class="flex bg-secondary p-1 w-fit rounded-md border-text border-[1px]">
            <Plus/>
            <p>New recipe</p>
        </button>
        <div class="grid grid-cols-6 border-b border-text pt-3">
            <h2 class="col-span-3">Id</h2>
            <h2 class="col-span-2">Title</h2>
            <span/>
        </div>
        {#each data.recipes as recipe}
            <RecipeAdminRecord recipe={recipe} onDelete={setOpen}/>
        {:else}
            <p>No recipes yet</p>
        {/each}
        <DeleteDialog dialogOpen={open} recipeId={uuid}/>
    </section>
    <section class="flex flex-col items-center">
        <RecipeForm categories={data.categories}/>
    </section>
</section>

<style lang="postcss">
    section > section {
        @apply min-w-[640px];
    }
</style>
