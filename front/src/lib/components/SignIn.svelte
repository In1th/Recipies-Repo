<script>
    import { page } from "$app/stores";
    import { signIn, signOut } from "@auth/sveltekit/client";

</script>
<div>
    {#if $page.data.session}
        <button on:click={() => signOut()}>Sign Out</button>

    {:else}
        <button on:click={() => signIn('auth0')}>Sign In</button>
    {/if}
</div>