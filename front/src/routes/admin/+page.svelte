<script>
    import RecipeForm from '$lib/components/RecipeForm.svelte';
</script>

<section class="flex w-full">
    <section>
        
    </section>
    <section class="flex flex-col items-center">
        <RecipeForm/>
    </section>
</section>

<style>
    section > section {
        @apply min-w-[640px];
    }
</style>