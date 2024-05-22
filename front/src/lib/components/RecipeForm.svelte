<script lang="ts">
    import { createSelect, melt } from "@melt-ui/svelte";
    import { ChevronDown } from "lucide-svelte";
    import { fade } from "svelte/transition";
    import TagsFormInput from "./TagsFormInput.svelte";

    export let categories: {name: string}[];
    
    const {
    elements: { trigger, menu, option, label },
    states: { selectedLabel, open },
    helpers: { isSelected }
    } = createSelect<string>({
    forceVisible: true,
    positioning: {
      placement: 'bottom',
      fitViewport: true,
      sameWidth: true,
    },
  });

</script>

<h1 class="pb-4">New recipe</h1>
<form class="flex flex-col gap-2" method="post" enctype="multipart/form-data">
    <fieldset>
        <label for="title">Title</label>
        <input name="title" type="text" required />
    </fieldset>
    <fieldset>
        <label use:melt={$label} for="category">Category</label>
        <button
            use:melt={$trigger}
            aria-label="Recipe-Category"
            class="flex items-center px-2"
            tabindex="0"
        >
          {$selectedLabel || 'Select recipe category'}
          <ChevronDown class="size-5 ml-auto" />
          <input name="category" bind:value={$selectedLabel} class="hidden" />
        </button>
        {#if $open}
            <div
                use:melt={$menu}
                class="relative bg-white p-2 rounded-md shadow"
                transition:fade={{ duration: 150 }}
            >
            {#each categories as cat}
                <div
                    class="bg-white hover:bg-secondary hover:bg-opacity-50 transition px-1"
                  use:melt={$option({ value: cat.name, label: cat.name })}
                >
                  <!-- <div class="">
                    <Check class="size-4" />
                  </div> -->

                  {cat.name}
                </div>
              {/each}
            </div>
        {/if}
    </fieldset>
    <fieldset>
        <label for="prepTime">Preparation time</label>
        <input name="prepTime" type="text" />
        <p>h</p>
    </fieldset>
    <fieldset>
        <label for="calories">Calories</label>
        <input name="calories" type="text" />
        <p>kcal</p>
    </fieldset>
    <TagsFormInput name="Tags"/>
    <fieldset class="flex-col w-unset!important">
        <p class="w-full">Ingredients (every indegredient in new line)</p>
        <textarea name="ingredients" class="w-full"/>
    </fieldset>
    <fieldset>
        <label for="image">Image</label>
        <input accept="image/png, image/jpeg" name="image" type="file"/>
    </fieldset>
    <fieldset>
        <label for="file">File</label>
        <input accept=".md" name="file" type="file" />
    </fieldset>
    <input type="submit"/>
</form>

<style>
    fieldset {
        @apply flex gap-2 items-center;

        & > label {
            @apply w-32;
        }

        & > input, & > button, & > textarea {
            @apply flex-grow border-text border-[1px] rounded-md bg-white overflow-hidden;
        }
    }

    input[type="submit"] {
        @apply cursor-pointer bg-primary p-1 border-[1px] border-text rounded-md;
    }

    input[type="file"]::file-selector-button {
        @apply bg-secondary shadow-none px-1 border-0;
    }
</style>