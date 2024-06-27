<script context="module" lang="ts">
  const {
      elements: { trigger, portalled, overlay, content, title, description },
      states: { open }
    } = createDialog({
        forceVisible: true,
    });

    export const deleteDialogTrigger = trigger;
</script>

<script lang="ts">
    import { enhance } from '$app/forms';
    import { createDialog, melt } from '@melt-ui/svelte'
    import { fade } from 'svelte/transition';

    export let recipeId: string;

    const close = () => {
        $open = false;
    }
</script>

{#if $open}
  <form method="POST" use:enhance use:melt={$portalled}>
    <input bind:value={recipeId} class="hidden" name="uuid"/>
    <div
        use:melt={$overlay}
        class="fixed inset-0 z-50 bg-text-500/50"
        transition:fade={{ duration: 75 }}
    />
    <div use:melt={$content} class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
    max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background-500
    p-6 shadow-lg">
      <h2 use:melt={$title} class="m-0 text-lg font-medium">Dialog Title</h2>
      <p use:melt={$description}>Do you want to delete recipe with id: "{recipeId}"?</p>
      <div class="flex gap-2">
          <button type="button" on:mousedown={close} class="ml-auto bg-secondary-500">No</button>
          <button formaction="?/delete" on:mousedown={close} class="bg-primary-500">Yes</button>
      </div>
    </div>
  </form>
{/if}

<style lang="postcss">
    button {
        @apply p-1 px-2 rounded-md;
    }
</style>