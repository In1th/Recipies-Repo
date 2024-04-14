<script>
  import { createTableOfContents, createSeparator, melt, createTooltip } from '@melt-ui/svelte';
	import Ingredient from './Ingredient.svelte';
    import { Clock, Flame, Tag } from 'lucide-svelte';
    import { fade } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;

  const category = data.meta.category ?? 'No category';

	const {
        elements: { root: horizontal },
    } = createSeparator();

  const {
    elements: { item },
    states: { activeHeadingIdxs, headingsTree },
  } = createTableOfContents({
    selector: '.markdown',
    exclude: ['h1', 'h4', 'h5', 'h6'],
    activeType: 'all',
    headingFilterFn: (heading) => !heading.hasAttribute('data-toc-ignore'),
    scrollFn: (id) => {
      /**
       * Here we're overwriting the default scroll function
       * so that we only scroll within the ToC preview
       * container, instead of the entire page.
       */
      const container = document.getElementById('toc-builder-preview');
      const element = document.getElementById(id);

      if (container && element) {
        container.scrollTo({
          top: element.offsetTop - container.offsetTop - 16,
          behavior: 'smooth',
        });
      }
    },
  });

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: 'bottom',
    },
    openDelay: 0,
    closeDelay: 0,
    closeOnPointerDown: false,
    forceVisible: true,
  });
</script>

<h1 class="pb-3">{data.meta.title}</h1>
<section class="flex flex-col gap-1 pb-3">
  <p class="py-0.5 px-2 bg-primary rounded-xl w-fit">{category}</p>
  <div class="flex gap-1">
    <Tag/>
    {#each data.meta.tags.slice(0, 3) as tag}
      <p class="py-0.5 px-2 bg-accent rounded-xl">{tag}</p>
    {/each}
    {#if data.meta.tags.slice(3).length > 0}
    <p
      class="py-0.5 px-2 bg-accent rounded-xl"
      use:melt={$trigger}
    >
      + {data.meta.tags.slice(3).length} more
    </p>
    {#if $open}
      <div
        use:melt={$content}
        transition:fade={{ duration: 100 }}
        class="z-10 rounded-lg bg-secondary shadow px-4 py-1"
      >
        <div use:melt={$arrow} />
        {#each data.meta.tags.slice(3) as tag}
          <li>{tag}</li>
        {/each}
      </div>
      {/if}
    {/if}
  </div>
  <section class="flex gap-1">
    <Clock/>
    {data.meta.time ?? '-'}
  </section>
  <section class="flex gap-1">
    <Flame/>
    {data.meta.calories ?? '-'}
  </section>
</section>

<section class="flex flex-col gap-1 p-4 bg-secondary w-fit rounded-xl shadow-xl my-4">
	<h3 class="font-bold">Ingredients</h3>
	<div class="w-full h-[1px] bg-text" use:melt={$horizontal}/>
	{#each data.meta.ingredients as ingredient}
		<Ingredient description={ingredient}/>
	{/each}
</section>

<!-- <section class="py-4">
  <h2 class="text-xl font-bold">Contents</h2>
  <div class="pl-2">
    {#key $headingsTree}
      <Tree
        tree={$headingsTree}
        activeHeadingIdxs={$activeHeadingIdxs}
        {item}
      />
    {/key}
  </div>
</section> -->

<section class="markdown">
	<svelte:component this={data.content} />
</section>