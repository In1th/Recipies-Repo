<script>
    import {Globe} from 'lucide-svelte';
    import {
    createMenubar,
    createSeparator,
    melt,
    } from '@melt-ui/svelte';

    const {
        elements: { root: vertical },
    } = createSeparator();

    const {
        elements: { root: horizontal },
    } = createSeparator();

    const {
        elements: { menubar },
        builders: { createMenu },
    } = createMenubar();

    const {
        elements: {
          trigger: trigger,
          menu: menu,
          item: item,
          separator: separator,
        },
    } = createMenu();
</script>

<nav class="w-screen h-10 flex items-center justify-between border-b-[1px] border-text mb-2 px-[12%]">
    <section use:melt={$menubar} class="w-full flex gap-8 items-center">
        <a href="/" class="mr-2"><b>Gotuje</b></a>
        <a
          type="button"
          use:melt={$trigger}
          href="/recipes"
        >
          Recipes
        </a>
        <div use:melt={$menu} class="bg-background flex flex-col gap-0.5 p-2 rounded-md shadow-xl">
            <a href="/recipes">All</a>
            <div class="w-full h-[1px] bg-text" use:melt={$horizontal}/>
            <a href="/recipes">Soups</a>
            <a href="/recipes">Main dishes</a>
            <a href="/recipes">Desserts</a>
        </div>
        <div use:melt={$vertical} class="h-4 w-[1px] bg-text"/>
        <a href="/admin">Dashboard</a>
        <button class="ml-auto"><Globe /></button>
        <button>Sign with Google</button>
    </section>
</nav>

<style>
    a {
        @apply transition-all hover:text-secondary;
    }
</style>