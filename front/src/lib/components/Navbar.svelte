<script>
    import { ChefHat , Menu } from 'lucide-svelte';
    import {
    createMenubar,
    createSeparator,
    melt,
    } from '@melt-ui/svelte';
    import SignIn from './SignIn.svelte';
    import { page } from '$app/stores';

    const {
        elements: { root: vertical },
    } = createSeparator();

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

<nav class="w-screen h-10 flex items-center justify-between border-b-[1px] border-text mb-2 p-6">
    <section use:melt={$menubar} class="w-full flex gap-2 md:gap-8 items-center">
        <a href='/' class="flex">
            <ChefHat />
            <b class=" hidden sm:block">Gotuje</b>
        </a>

        <!-- RECIPES -->
        <a href="/recipes">
          All
        </a>
        <a href="/recipes?cat=soups">Soups</a>
        <a href="/recipes?cat=main">Main dishes</a>
        <a href="/recipes?cat=desserts">Desserts</a>

        {#if $page.data.session}
             <div use:melt={$vertical} class="desktop h-4 w-[1px] bg-text"/>
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
            class="bg-background flex flex-col gap-0.5 p-2 rounded-md shadow-xl md:hidden"
            use:melt={$menuBurger}
        >
            <a href="/admin">Dashboard</a>
            <div class="w-full h-[1px] bg-text" use:melt={$sepBurger}/>
            <button>
                <span>Sign with Google</span>
            </button>
        </div>
    </section>
</nav>

<style>
    .desktop {
        @apply hidden md:block;
    }
</style>