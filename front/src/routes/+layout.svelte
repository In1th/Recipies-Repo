<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Toasts from '$lib/components/Toasts.svelte';
    import SearchBar from '$lib/components/searchbar/SearchBar.svelte';
    import './app.css';

    const isInIframe = () => {
        try{
            return window.self !== window.top;
        }catch (e){
            return true;
        }
    }
</script>
<Navbar/>
{#if isInIframe()}
    <h1>Hello Iframe!</h1>
{:else}
    <section class="flex flex-col items-center mx-2 sm:mx-auto max-w-[1280px]">
        <SearchBar/>
        <section class="w-full">
            <slot/>
        </section>
        <Toasts/>
    </section>
{/if}