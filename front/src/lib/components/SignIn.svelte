<script>
    import { page } from "$app/stores";
    import { signIn as authSignIn, signOut as authSignOut } from "@auth/sveltekit/client";
    import { LogOut } from "lucide-svelte";
    import { addErrorToast, addSuccessToast } from "./Toasts.svelte";

    const signOut = async () => {
        try{
            await authSignOut();
            addSuccessToast('Signed Out', 'You have been signed out of your account');
        } catch(e) {
            console.log(e)
            addErrorToast('Operation failed', 'The issue has been reported and our team will investigate it.')
        }
    }

    const signIn = async () => {
        try{
            await authSignIn('auth0');
            addSuccessToast('Signed In', 'You have been signed in!');
        } catch(e) {
            console.log(e)
            addErrorToast('Operation failed', 'The issue has been reported and our team will investigate it.')
        }
    }

</script>
<div class="flex gap-3 items-center">
    {#if $page.data.session}
        <img
            class="w-8 h-8 rounded-full object-cover"
            src={$page.data.session.user?.image}
            alt="profile picture"
            />
        <span>Hi, {$page.data.session.user?.name}!</span>
        <button on:click={signOut} class="rounded-full p-1.5">
            <LogOut/>
        </button>

    {:else}
        <button on:click={signIn} class=" rounded-md p-1.5">
            Sign In
        </button>
    {/if}
</div>

<style lang="postcss">
    button {
        @apply bg-primary-500 hover:bg-primary-400 transition items-center;
    }
</style>