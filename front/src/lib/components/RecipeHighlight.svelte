<script lang="ts">
    import type { Recipe } from "$lib/models/RecipeDto";
    import { Clock, Flame } from "lucide-svelte";
    import Image from "./Image.svelte";
    import TagsView from "./TagsView.svelte";

    export let recipe: Recipe;
</script>

<a
    class="relative flex flex-col gap-2 items-center shadow-lg rounded-2xl bg-primary overflow-hidden w-[400px] aspect-square z-0"
    href={`/recipes/${recipe.uuid}`}
>   
    <Image styles="z-0 absolute w-[400px] aspect-square object-cover" imagePath={recipe.imagePath} placeholder="baba.jpg" alt={recipe.title}/>
    <div class="z-20 mt-auto bg-white/70 w-full flex flex-col gap-1 items-center p-2 max-h-[160px]">
        <h2>{recipe.title}</h2>
        <p>{recipe.category.name || 'No category'}</p>
        <section class="flex gap-1">
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