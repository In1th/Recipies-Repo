<script>
    import { page } from '$app/stores';
    import Navbar from '$lib/components/Navbar.svelte';
    import Toasts from '$lib/components/Toasts.svelte';
    import SearchBar from '$lib/components/searchbar/SearchBar.svelte';
    import SearchCategories from '$lib/components/searchbar/SearchCategories.svelte';
    import './app.css';

    const isNotInFrame = () => {
        try{
            return window.parent === window;
        } catch (e) {
            return true;
        }
    }
</script>

<svelte:head>
    <title>Gotuje</title>
</svelte:head>


{#if isNotInFrame()}
<Navbar/>
<section class="flex flex-col items-center mx-2 sm:mx-auto max-w-[1280px]">
    {#if !$page.url.href.includes('/admin') && !$page.url.href.includes('/login')}
        <SearchCategories categories={['Dinner', 'Dessert', 'Soups']}/>
        <SearchBar />
    {/if}
    <section class="w-full">
        <slot/>
    </section>
    <Toasts/>
</section>
{:else}
<div class="h-screen w-screen flex flex-col justify-center items-center">
    <h1>This is a preview!</h1>
    <p>Click <b>here</b> to get to the full page :)</p>
</div>
{/if}
