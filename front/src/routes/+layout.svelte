<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import SearchBar from '$lib/components/searchbar/SearchBar.svelte';
    import './app.css';
</script>
<Navbar/>
<section class="flex flex-col items-center mx-2 sm:mx-auto max-w-[1280px]">
    <SearchBar/>
    <section>
        <slot/>
    </section>
</section>