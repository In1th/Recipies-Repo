<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import SearchBar from '$lib/components/searchbar/SearchBar.svelte';
    import './app.css';
    import { searchHandler, searchStore } from '$lib/components/searchbar/search';
    import { onDestroy } from 'svelte';

    // Example subscription to handle search filtering
    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    });


</script>
<Navbar/>
<section class="flex flex-col items-center mx-2 sm:mx-auto max-w-[1280px]">
    <SearchBar {searchStore} />
    <section class="w-full">
        <slot/>
    </section>
</section>