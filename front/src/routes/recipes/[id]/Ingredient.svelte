<script lang="ts">
    import { createCheckbox, melt } from '@melt-ui/svelte';
    import {Minus, Check} from 'lucide-svelte';

    export let description: string;

    const {
        elements: { root, input },
        helpers: { isChecked, isIndeterminate },
    } = createCheckbox({
    defaultChecked: 'indeterminate',
  })
</script>

<div>
    <button
        use:melt={$root}
        class=" bg-background rounded-md shadow hover:opacity-75 size-5 flex items-center justify-center"
    >
        {#if $isChecked}
        <Check class="size-5" />
        {:else}
            <!-- <Minus class="size-5" /> -->
        {/if}
        <input use:melt={$input} />
    </button>
    <p class:crossed={$isChecked}>{description}</p>
</div>

<style>
    div {
        @apply flex gap-1 text-sm w-fit;
    }

    .crossed { 
        @apply line-through;
    }
</style>