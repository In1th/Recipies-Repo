<script>
    import { ChefHat , Menu } from 'lucide-svelte';
    import {
    createMenubar,
    createSeparator,
    melt,
    } from '@melt-ui/svelte';
    import google from '$lib/images/google.png';

    const {
        elements: { root: vertical },
    } = createSeparator();

    const {
        elements: { menubar },
        builders: { createMenu },
    } = createMenubar();

    const {
        elements: {
          trigger: triggerRecipe,
          menu: menuRecipe,
          separator: sepRecipe
        },
    } = createMenu();
    
    const {
        elements: {
          trigger: triggerBurger,
          menu: menuBurger,
          separator: sepBurger
        },
    } = createMenu();
</script>

<nav class="w-screen h-10 flex items-center justify-between border-b-[1px] border-text mb-2 px-2">
    <section use:melt={$menubar} class="w-full flex gap-2 md:gap-8 items-center">
        <a href="/" class="flex">
            <ChefHat />
            <b class=" hidden sm:block">Gotuje</b>
        </a>

        <!-- RECIPES -->
        <button
          type="button"
          use:melt={$triggerRecipe}
        >
          Recipes
        </button>
        <div use:melt={$menuRecipe} class="bg-background flex flex-col gap-0.5 p-2 rounded-md shadow-xl">
            <a href="/recipes">All</a>
            <div class="w-full h-[1px] bg-text" use:melt={$sepRecipe}/>
            <a href="/recipes?cat=soups">Soups</a>
            <a href="/recipes?cat=main">Main dishes</a>
            <a href="/recipes?cat=desserts">Desserts</a>
        </div>

        <div use:melt={$vertical} class="desktop h-4 w-[1px] bg-text"/>
        <a class="desktop" href="/admin">Dashboard</a>
        <button class="hidden ml-auto md:flex gap-0.5 items-center">
            <img src={google} alt="google logo"/>
            <span>Sign with Google</span>
        </button>

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