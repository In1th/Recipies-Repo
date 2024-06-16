<script>
    import {signIn, signOut} from "@auth/sveltekit/client"
    import {page} from "$app/stores";
    import { LogOutIcon } from "lucide-svelte";
</script>

<div>
    {#if $page.data.session}
        <section class="flex items-center gap-2">
            <img
                class="h-8 aspect-square rounded-full"
                src={$page.data.session.user?.image}
                alt="user-profile"
            />
            <p>Hi, {$page.data.session.user?.name ?? "User"}</p>
            <button on:click={() => signOut()} class="button"><LogOutIcon/></button>
        </section>
    {:else}
        <button on:click={() => signIn("google")}>
            Google SSO
        </button>
    {/if}
</div>