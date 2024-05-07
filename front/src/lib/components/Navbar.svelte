<script>
    import { ChefHat , Menu } from 'lucide-svelte';
    import {
    createMenubar,
    createSeparator,
    melt,
    } from '@melt-ui/svelte';

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

    // const url = window.location.href.includes('/p2/') ? '/p2' : '/';
</script>

<nav class="w-screen h-10 flex items-center justify-between border-b-[1px] border-text mb-2 p-6">
    <section use:melt={$menubar} class="w-full flex gap-2 md:gap-8 items-center">
        <a href='/' class="flex">
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
            <a href="./recipes">All</a>
            <div class="w-full h-[1px] bg-text" use:melt={$sepRecipe}/>
            <a href="./recipes?cat=soups">Soups</a>
            <a href="./recipes?cat=main">Main dishes</a>
            <a href="./recipes?cat=desserts">Desserts</a>
        </div>

        <div use:melt={$vertical} class="desktop h-4 w-[1px] bg-text"/>
        <a class="desktop" href="./admin">Dashboard</a>
        <script src="https://accounts.google.com/gsi/client" async></script>
        <div class="ml-auto">
            <div id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
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