<script lang="ts">
    import {faker} from '@faker-js/faker'; 
    import {page} from '$app/stores';
    import {addSuccessToast} from '$lib/components/Toasts.svelte';
    import TimeAgo from 'javascript-time-ago';
    import en from 'javascript-time-ago/locale/en'

    TimeAgo.addDefaultLocale(en)

    let comments = [...Array(faker.number.int({min: 1, max: 20}))].map(() => ({
        name: faker.name.fullName(),
        comment: faker.lorem.paragraph(),
        id: faker.datatype.uuid(),
        created: faker.date.anytime()
    }));

    let newCommentText = '';

    const newComment = () => {
        if (!newCommentText) {
            return;
        }

        if (!$page.data.session){
            return;
        }

        comments = [{
            name: $page.data.session.user.name,
            comment: newCommentText,
            id: $page.data.session.user.id,
            created: new Date()
        }, ...comments];
        newCommentText = '';
        addSuccessToast('Comment created', 'Your comment has been created');
    }

    const timeAgo = new TimeAgo('en-US');
</script>

<section class="mt-10 flex flex-col gap-10">
    <h1>Comments ({comments.length})</h1>
    <div class="flex flex-col gap-2 my-5">
        <textarea bind:value={newCommentText} class="rounded-xl border-text-500 border-[1px]"/>
        <div class="flex gap-2 items-center">
            {#if !$page.data.session}
                <i class="ml-auto">You must be logged in to comment</i>
            {/if}
            <button
                on:click={newComment}
                class="bg-primary-500 hover:bg-primary-400 transition rounded-md items-center p-1"
                class:left={$page.data.session}
                disabled={!$page.data.session}
            >
                Send comment
            </button>
        </div>
    </div>
    {#each comments as comment}
        <div class="bg-secondary-600/30 flex flex-col gap-2 shadow-lg rounded-xl p-3 w-[800px]" class:left={comment.id === $page.data.session?.user.id}>
            <div class="flex">
                <h3><b>{comment.name}</b> ({timeAgo.format(comment.created)})</h3>
            </div>
            <p class="max-w-[800px]">{comment.comment}</p>
        </div>
    {/each}
</section>

<style lang="postcss">
    .left {
        @apply ml-auto
    }
</style>