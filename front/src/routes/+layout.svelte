<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Toasts from '$lib/components/Toasts.svelte';
    import SearchBar from '$lib/components/searchbar/SearchBar.svelte';
    import './app.css';
</script>
<Navbar/>
<section class="flex flex-col items-center mx-2 sm:mx-auto max-w-[1280px]">
    <SearchBar/>
    <section class="w-full">
        <slot/>
    </section>
    <Toasts/>
</section>