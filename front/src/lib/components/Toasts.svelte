<script lang="ts">
    import { melt } from "@melt-ui/svelte";
    import { X } from "lucide-svelte";
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import { toasterStore } from '$lib/stores';
  
    const {
      elements: { content, title, description, close },
      states: { toasts },
      actions: { portal },
    } = $toasterStore;
</script>

<div
  class="fixed right-0 top-0 z-50 m-4 flex flex-col items-end gap-2 md:bottom-0 md:top-auto"
  use:portal
>
  {#each $toasts as { id, data } (id)}
    <div
      use:melt={$content(id)}
      animate:flip={{ duration: 500 }}
      in:fly={{ duration: 150, x: '100%' }}
      out:fly={{ duration: 150, x: '100%' }}
      class="rounded-lg bg-secondary-500 shadow-md"
    >
      <div
        class="relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-5"
      >
        <div>
          <h3
            use:melt={$title(id)}
            class="flex items-center gap-2 font-semibold"
          >
            {data.title}
            <span class="size-1.5 rounded-full {data.color}" />
          </h3>
          <div use:melt={$description(id)}>
            {data.description}
          </div>
        </div>
        <button
          use:melt={$close(id)}
          class="absolute right-4 top-4 grid size-6 place-items-center rounded-full
          hover:bg-primary-500/50"
        >
          <X class="size-4" />
        </button>
      </div>
    </div>
  {/each}
</div>