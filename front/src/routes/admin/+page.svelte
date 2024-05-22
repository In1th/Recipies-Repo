<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import RecipeForm from "$lib/components/RecipeForm.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        if (!$page.data.session){
            goto('/');
            return;
        }
    })

    export let data;
</script>

<section class="flex w-full">
    <section>
        
    </section>
    <section class="flex flex-col items-center">
        <RecipeForm categories={data.categories}/>
    </section>
</section>

<style>
    section > section {
        @apply min-w-[640px];
    }
</style>
