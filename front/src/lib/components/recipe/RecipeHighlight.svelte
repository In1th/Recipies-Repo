<script lang="ts">
    import type { Recipe } from "$lib/models";
    import { Clock, Flame, Star } from "lucide-svelte";
    import Image from "../Image.svelte";
    import TagsView from "../TagsView.svelte";
    import FakeRate from "../FakeRate.svelte";

    export let recipe: Recipe;
</script>

<a
    class="relative flex flex-col gap-2 items-center shadow-lg rounded-2xl bg-primary-500 overflow-hidden w-[400px] aspect-square z-0"
    href={`/p6/recipes/${recipe.uuid}`}
>
    <Image styles="z-0 absolute w-full h-full object-cover" imagePath={recipe.imagePath} placeholder="baba.jpg" alt={recipe.title}/>
    <div class="z-20 mt-auto bg-white/70 w-full flex flex-col gap-1 items-center p-2 h-[200px]">
        <h2>{recipe.title}</h2>
        <div class="flex gap-2">
            <FakeRate/>
            •
            <p>{recipe.category.name.replaceAll("_"," ") || 'No category'}</p>
        </div>
        <section class="mt-auto flex gap-1 flex-wrap justify-center">
            <TagsView tags={recipe.tags}/>
        </section>
        <div class="flex gap-5 w-full px-5 pt-5">
            <section class="flex gap-1 ml-auto">
                <Clock/>
                {'-'}
            </section>
            <section class="flex gap-1">
              <Flame/>
              {recipe.calories ?? '-'} kcal
            </section>
        </div>
    </div>
</a>

<style lang="postcss">
    h2 {
        @apply text-2xl;
    }
</style>