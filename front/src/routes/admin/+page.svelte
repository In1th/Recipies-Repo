<script lang="ts">
    import { goto } from "$app/navigation";
    import DeleteDialog from "$lib/components/DeleteDialog.svelte";
    import RecipeAdminRecord from "$lib/components/RecipeAdminRecord.svelte";
    import RecipeForm from "$lib/components/RecipeForm.svelte";
    import { editRecipeStore } from "$lib/stores/editRecipeStore";
    import { Plus } from "lucide-svelte";
    import type { ActionData } from "./$types.js";
    import { addErrorToast, addSuccessToast } from "$lib/stores/toasterStore.js";
    import type { Recipe } from "$lib/models/RecipeDto.js";
    import { createDialog } from "@melt-ui/svelte";

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

    let searchVal = '';

    $: filtered = data.recipes.filter((r: Recipe) => r.title.toLowerCase().includes(searchVal.toLowerCase()));

    const props = createDialog({
        forceVisible: true,
    });
</script>

<section class="flex w-full">
    <section class="flex flex-col">
        <div class="flex w-full gap-4">
            <input placeholder="Search" bind:value={searchVal}/>
            <button on:mousedown={onNew} class="flex ml-auto bg-primary p-1 w-fit rounded-md shadow-lg">
                <Plus/>
            </button>
        </div>
        <div class="grid grid-cols-6 border-b border-text pt-3">
            <h2 class="col-span-3">Id</h2>
            <h2 class="col-span-2">Title</h2>
            <span/>
        </div>
        {#each filtered as recipe}
            <RecipeAdminRecord recipe={recipe} onDelete={setOpen} trigger={props.elements.trigger}/>
        {:else}
            <p>{searchVal ? 'No results' : 'No recipes'}</p>
        {/each}
        <DeleteDialog recipeId={uuid} props={props}/>
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
        @apply rounded-md border-[1px] border-text bg-white p-1 w-full;
    }
</style>
