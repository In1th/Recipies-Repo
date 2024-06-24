<script>
    import { ChefHat, Menu } from 'lucide-svelte';
    import {
    createMenubar,
    melt,
    } from '@melt-ui/svelte';
    import SignIn from './SignIn.svelte';
    import { page } from '$app/stores';


    const {
        elements: { menubar },
        builders: { createMenu },
    } = createMenubar();
    
    const {
        elements: {
          trigger: triggerBurger,
          menu: menuBurger,
          separator: sepBurger
        },
    } = createMenu();

    // const url = window.location.href.includes('/p2/') ? '/p2' : '/';
</script>

<nav class="w-screen h-10 flex items-center justify-between shadow-lg mb-2 p-6">
    <section use:melt={$menubar} class="w-full flex gap-2 md:gap-8 items-center">
        <a href='/' class="flex">
            <ChefHat />
            <b class=" hidden sm:block">Gotuje</b>
        </a>

        {#if $page.data.session}
            <a class="desktop" href="/admin">Dashboard</a>
        {/if}
        <div class="ml-auto">
            <SignIn/>
        </div>

        <!-- MENU -->
        <button
            class="ml-auto md:hidden"
            use:melt={$triggerBurger}
        >
            <Menu />
        </button>

        <div
            class="bg-background-500 flex flex-col gap-0.5 p-2 rounded-md shadow-xl md:hidden"
            use:melt={$menuBurger}
        >
            <a href="/admin">Dashboard</a>
            <div class="w-full h-[1px] bg-text-500" use:melt={$sepBurger}/>
            <SignIn/>
        </div>
    </section>
</nav>

<style lang="postcss">
    .desktop {
        @apply hidden md:block;
    }
</style>