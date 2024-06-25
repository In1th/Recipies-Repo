<script lang="ts">
    import { createTagsInput, melt } from "@melt-ui/svelte";
    import { X, Search } from "lucide-svelte";
    import { faker } from '@faker-js/faker';
    import { clickOutside } from "./clickOutside";
    import { fly } from "svelte/transition";

    const {
        elements: { root, input, tag, deleteTrigger, edit },
        states: { tags },
        helpers: { addTag }
    } = createTagsInput({
        unique: true,
        addOnPaste: true,
        editable: true,
        add(tag) {
            searchText = '';

            if ($tags.find(t => t.id === tag.replace('-', ''))){
                return Promise.reject();
            }

            return { id: tag.replace('-', ''), value: tag };
        },
    });

    type TagRow = {
        name: string;
        count: number;
    };

    const arrTags = Array.from({ length: 20 }, (_, index) => index).map(
        (_) =>
            ({
                name: faker.commerce.productName().split(" ")[0],
                count: faker.number.int(20),
            }) as TagRow,
    );

    export let searchStore;
    let searchText = '';
    let showTags = false;
    let suggestionsWrapper: unknown;

    $: filtered = searchText
        ? arrTags.filter(({ name }) => {
              const normalizedInput = searchText.replace('-', '').toLowerCase();
              return name.toLowerCase().includes(normalizedInput);
          })
        : arrTags;

    const addNewTag = async (t: string) => {
        await addTag(t);
        showTags = false;
    }

    const onFocusIn = () => {
        showTags = true;
    }

    $: if (suggestionsWrapper) {
        const item = (suggestionsWrapper as Element).firstChild;
        if (item) {
            item.dispatchEvent(new FocusEvent('focusin'));
        }
    }

    const onFocusOut = () => {
        showTags = false;
    }

    const clear = () => {
        $tags = [];
        showTags = false;
    }
</script>



<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    use:melt={$root}
    class="relative flex flex-col w-full max-w-[1536px]"
    use:clickOutside
    on:click_outside={onFocusOut}
    >
    <div class="flex gap-2 items-center">
        <div class="relative flex-grow">
            <input
                use:melt={$input}
                bind:value={$searchStore.search}
                on:click={onFocusIn}
                type="text"
                placeholder="Enter tags..."
                class="w-full shrink grow basis-0 border-0 rounded-md p-0.5 outline-none focus:!ring-0 data-[invalid]:text-red-500"
            />
            {#if $tags.length > 0}
                <button
                    class="absolute right-0 py-auto"
                    on:click={clear}
                >
                    <X/>
                </button>
            {/if}
        </div>
        <button class="flex gap-1 bg-accent-500 hover:bg-accent-400 transition rounded-3xl items-center p-1">
            <Search />
        </button>
    </div>

    <div class="flex flex-row w-full min-h-16 flex-wrap gap-2.5 rounded-md md:px-3 py-2">
        {#each $tags as t}
            <div
                use:melt={$tag(t)}
                class:green={!t.value.startsWith('-') && !t.value.includes(":")}
                class:red={t.value.startsWith('-')}
                class:blue={t.value.includes(":")}
                class="flex items-center overflow-hidden rounded-xl bg-red h-fit"
            >
                {#if ["orderby", "type"].includes(t.value.split(":")[0])}
                    <span
                        class="flex items-center border-r border-white/10 px-1.5"
                        >{t.value.split(":")[0]}</span
                    >
                {/if}
                <span class="flex items-center border-r border-white/10 px-1.5">
                    {!t.value.includes(':') ? t.value.replace('-', '') : t.value.split(':')[1]}
                </span>
                <button
                    use:melt={$deleteTrigger(t)}
                    class="flex h-full items-center px-1"
                >
                    <X class="square-3" />
                </button>
            </div>
            <div
                use:melt={$edit(t)}
                class="flex items-center overflow-hidden rounded-md px-1.5 [word-break:break-word] data-[invalid-edit]:focus:!ring-red-500"
            />
        {/each}
    </div>
    {#if showTags}
        <div class="absolute w-full max-h-[250px] top-8 bg-white shadow-lg rounded-md flex flex-col gap-2 p-2 overflow-y-scroll z-[999]"
            id="tags-wrapper"
            bind:this={suggestionsWrapper}
            transition:fly
        >
            {#each filtered as tg}
                <button class="w-full text-left hover:bg-slate-400 focus:bg-secondary-500 transition p-0.5 rounded-sm"
                    on:click={() => addNewTag(`${searchText.startsWith('-')? '-': ''}${tg.name}`)}
                >
                    {tg.name} ({tg.count})
                </button>
            {:else}
                <p>No results . . .</p>
            {/each}
        </div>
    {/if}
</div>

<style lang="postcss">
    .blue {
        @apply bg-blue-500;
    }
    .red {
        @apply bg-red-500;
    }
    .green {
        @apply bg-green-500;
    }
</style>