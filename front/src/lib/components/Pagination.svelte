<script lang="ts">
    import { melt, type createPagination } from "@melt-ui/svelte";
    import { ChevronLeft, ChevronRight } from "lucide-svelte";


    export let props: ReturnType<typeof createPagination>;

    const {
      elements: { root, pageTrigger, prevButton, nextButton },
      states: { pages, page },
    } = props;

</script>

<nav
  class="flex flex-col items-center gap-4 mt-4"
  aria-label="pagination"
  use:melt={$root}
>
  <div class="flex items-center gap-2">
    <button use:melt={$prevButton}>
      <ChevronLeft class="size-4" />
    </button>
    {#each $pages as p, idx}
      {#if p.type === 'ellipsis'}
        <span>...</span>
      {:else}
        <button use:melt={$pageTrigger(p)} disabled={$page === idx + 1}>
          {p.value}
        </button>
      {/if}
    {/each}
    <button use:melt={$nextButton}>
      <ChevronRight class="size-4" />
    </button>
  </div>
</nav>

<style lang="postcss">
    button {
        @apply bg-primary-500 hover:bg-primary-600 transition p-1 w-fit rounded-md shadow-lg h-8 aspect-square flex items-center justify-center;

        &:disabled {
            @apply bg-primary-100;
        }
    }
</style>