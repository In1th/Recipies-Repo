<script lang="ts">
    import { enhance } from '$app/forms';
    import type { DialogType } from '$lib/types';
    import { melt } from '@melt-ui/svelte'
    import { fade } from 'svelte/transition';

    export let recipeId: string;

    export let props: DialogType;

    const {
      elements: { portalled, overlay, content, title, description },
      states: { open }
    } = props;

    const close = () => {
        $open = false;
    }
</script>

{#if $open}
  <form method="POST" use:enhance use:melt={$portalled}>
    <input bind:value={recipeId} class="hidden" name="uuid"/>
    <div
        use:melt={$overlay}
        class="fixed inset-0 z-50 bg-text/50"
        transition:fade={{ duration: 75 }}
    />
    <div use:melt={$content} class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
    max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background
    p-6 shadow-lg">
      <h2 use:melt={$title} class="m-0 text-lg font-medium">Dialog Title</h2>
      <p use:melt={$description}>Do you want to delete recipe with id: "{recipeId}"?</p>
      <div class="flex gap-2">
          <button type="button" on:mousedown={close} class="ml-auto bg-secondary">No</button>
          <button formaction="?/delete" on:mousedown={close} class="bg-primary">Yes</button>
      </div>
    </div>
  </form>
{/if}

<style lang="postcss">
    button {
        @apply p-1 px-2 rounded-md;
    }
</style>