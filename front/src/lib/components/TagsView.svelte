<script lang="ts">
    import type { Tag } from "$lib/models/RecipeDto";
    import { createTooltip, melt } from "@melt-ui/svelte";
    import { fade } from "svelte/transition";

    export let tags: Tag[];
    export let maxNoOfTags = 4;

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

{#each tags.slice(0, maxNoOfTags) as tag}
    <p class="py-0.5 px-2 bg-accent rounded-xl">{tag.name}</p>
{/each}
{#if tags.slice(maxNoOfTags).length > 0}
<p
  class="py-0.5 px-2 bg-accent rounded-xl z-50"
  use:melt={$trigger}
>
  + {tags.slice(maxNoOfTags).length} more
</p>
{#if $open}
  <div
    use:melt={$content}
    transition:fade={{ duration: 100 }}
    class="z-10 rounded-lg bg-secondary shadow px-4 py-1"
  >
    <div use:melt={$arrow} />
    {#each tags.slice(maxNoOfTags) as tag}
      <li>{tag.name}</li>
    {/each}
  </div>
  {/if}
{/if}