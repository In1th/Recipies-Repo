<script>
    import { goto } from "$app/navigation";
    import RecipeAdminRecord from "$lib/components/RecipeAdminRecord.svelte";
    import RecipeForm from "$lib/components/RecipeForm.svelte";
    import { editRecipeStore } from "$lib/stores/editRecipeStore";
    import { Plus } from "lucide-svelte";
    import { onMount } from "svelte";

    export let data;
    
    onMount(() => {
        if (!data.session){
            goto('/');
            return;
        }
    })

    const onNew = () => {
        $editRecipeStore = undefined;
    }
</script>

<section class="flex w-full">
    <section class="flex flex-col">
        <button on:mousedown={onNew} class="flex">
            <Plus/>
            <p>New recipe</p>
        </button>
        <div class="grid grid-cols-6 border-b">
            <h2 class="col-span-3">Id</h2>
            <h2 class="col-span-2">Title</h2>
            <span/>
        </div>
        {#each data.recipes as recipe}
            <RecipeAdminRecord recipe={recipe}/>
        {/each}
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
