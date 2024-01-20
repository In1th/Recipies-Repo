<script lang="ts">
    import "./app.css";
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
    }

    const onFocusIn = () => {
        showTags = true;
    }

    $: if (suggestionsWrapper) {
        const item = (suggestionsWrapper as Element).firstChild;
        if (item) {
            item.dispatchEvent(new FocusEvent('focusin'));
            console.log(item)
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

<div class="flex items-center justify-center bg-slate-600 w-screen h-screen">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="relative flex gap-4">
        <div
            use:melt={$root}
            class="flex w-[1000px] flex-row overflow-x-scroll gap-2.5 rounded-md bg-white px-3 py-2"
            use:clickOutside
            on:click_outside={onFocusOut}
        >
            {#each $tags as t}
                <div
                    use:melt={$tag(t)}
                    class:bg-green-200={!t.value.startsWith('-') && !t.value.includes(":")}
                    class:bg-red-200={t.value.startsWith('-')}
                    class:bg-blue-200={t.value.includes(":")}
                    class="flex items-center overflow-hidden rounded-xl"
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
                        class="flex h-full items-center px-1 enabled:hover:bg-magnum-300"
                    >
                        <X class="square-3" />
                    </button>
                </div>
                <div
                    use:melt={$edit(t)}
                    class="flex items-center overflow-hidden rounded-md px-1.5 [word-break:break-word] data-[invalid-edit]:focus:!ring-red-500"
                />
            {/each}
            <input
                use:melt={$input}
                bind:value={searchText}
                on:click={onFocusIn}
                type="text"
                placeholder="Enter tags..."
                class="min-w-[4.5rem] shrink grow basis-0 border-0 text-black outline-none focus:!ring-0 data-[invalid]:text-red-500"
            />
            {#if $tags.length > 0}
                <button on:click={clear}><X/></button>
            {/if}
        </div>
        {#if showTags}            
            <div class="absolute w-full max-h-[250px] top-12 bg-white rounded-md flex flex-col gap-2 p-2 overflow-y-scroll"
                id="tags-wrapper"
                bind:this={suggestionsWrapper}
                transition:fly
            >
                {#each filtered as tg}
                    <button class="w-full text-left hover:bg-slate-400 focus:bg-red-950 transition p-0.5 rounded-sm"
                        on:click={() => addNewTag(`${searchText.startsWith('-')? '-': ''}${tg.name}`)}
                    >
                        {tg.name} ({tg.count})
                    </button>
                {:else}
                    <p>No results . . .</p>
                {/each}
            </div>
        {/if}
        <button class="flex gap-1 bg-white rounded-3xl items-center px-1">
            <Search />
            <span>Search</span>
        </button>
    </div>

</div>
