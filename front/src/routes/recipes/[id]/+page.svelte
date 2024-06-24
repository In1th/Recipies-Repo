<script>
  import { createSeparator, melt } from '@melt-ui/svelte';
	import Ingredient from './Ingredient.svelte';
  import { Clock, Flame, Tag } from 'lucide-svelte';
  import Image from '$lib/components/Image.svelte';
    import TagsView from '$lib/components/TagsView.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

  const category = data.meta.category.name || 'No category';

	const {
        elements: { root: horizontal },
    } = createSeparator();

  // const {
  //   elements: { item },
  //   states: { activeHeadingIdxs, headingsTree },
  // } = createTableOfContents({
  //   selector: '.markdown',
  //   exclude: ['h1', 'h4', 'h5', 'h6'],
  //   activeType: 'all',
  //   headingFilterFn: (heading) => !heading.hasAttribute('data-toc-ignore'),
  //   scrollFn: (id) => {
  //     /**
  //      * Here we're overwriting the default scroll function
  //      * so that we only scroll within the ToC preview
  //      * container, instead of the entire page.
  //      */
  //     const container = document.getElementById('toc-builder-preview');
  //     const element = document.getElementById(id);

  //     if (container && element) {
  //       container.scrollTo({
  //         top: element.offsetTop - container.offsetTop - 16,
  //         behavior: 'smooth',
  //       });
  //     }
  //   },
  // });
</script>

<section class="flex-1 flex items-center mb-4">
  <div class="h-[600px] w-full bg-secondary-500 rounded-xl shadow-xl overflow-hidden" >
    <Image imagePath={data.meta.imagePath} placeholder="baba.jpg" alt={data.meta.title}/>
  </div>
</section>
<section class="xl:ml-auto flex-col">
  <h1 class="pb-3">{data.meta.title}</h1>
  <section class="flex flex-col gap-1 pb-3">
    <p class="py-0.5 px-2 bg-primary-500 rounded-xl w-fit">{category}</p>
    <div class="flex gap-1">
      <Tag/>
      <TagsView tags={data.meta.tags} maxNoOfTags={10}/>
    </div>
    <section class="flex gap-1">
      <Clock/>
      {data.meta.preparationTime ?? '-'}
    </section>
    <section class="flex gap-1">
      <Flame/>
      {data.meta.calories ?? '-'} kcal
    </section>
  </section>
  
  <section class="flex flex-col w-full gap-1 p-4 bg-secondary-500 rounded-xl shadow-xl my-4">
    <h3 class="font-bold">Ingredients</h3>
    <div class="w-full h-[1px] bg-text-500" use:melt={$horizontal}/>
    <div class="flex flex-col flex-wrap gap-1 xl:max-h-[400px] overflow-x-scroll">
      {#each data.meta.recipeIngredients as ingredient}
        <Ingredient description={ingredient.ingredient.name}/>
      {/each}
    </div>
  </section>
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

<section class="markdown mb-4">
  {@html data.content}
</section>