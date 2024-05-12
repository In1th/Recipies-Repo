<script lang="ts">
    import { createTagsInput, melt } from '@melt-ui/svelte';
    import { X } from 'lucide-svelte';
  
    export let name: string;

    const {
      elements: { root, input, tag, deleteTrigger, edit },
      states: { tags },
    } = createTagsInput({
      unique: true,
      add(tag) {
        return { id: tag, value: tag };
      },
      addOnPaste: true,
    });

    $: propName = name.toLowerCase();
    $: formData = `[${$tags.map(t => `"${t.value}"`).join(',')}]`
  </script>
  
      <div class="flex-grow flex flex-col items-start justify-center gap-2">
          <label for={propName}>{name}</label>
          <input name={propName} bind:value={formData} class="hidden"/>
        <div
          use:melt={$root}
          class="flex w-full flex-row flex-wrap gap-2.5 rounded-md bg-white px-3 py-2 border-text border-[1px]"
        >
          {#each $tags as t}
            <div
              use:melt={$tag(t)}
              class="flex items-center overflow-hidden rounded-md bg-primary"
            >
              <span class="flex items-center border-r border-white/10 px-1.5"
                >{t.value}</span
              >
              <button
                use:melt={$deleteTrigger(t)}
                class="flex h-full items-center px-1"
              >
                <X class="size-3" />
              </button>
            </div>
            <div
              use:melt={$edit(t)}
              class="flex items-center overflow-hidden rounded-md px-1.5 focus:outline-none [word-break:break-word] data-[invalid-edit]:focus:!ring-red-500"
            />
          {/each}
      
          <input
            use:melt={$input}
            type="text"
            class="flex-grow data-[invalid]:text-red-500"
          />
        </div>
      </div>
