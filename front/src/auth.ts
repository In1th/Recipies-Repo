import Google from "@auth/core/providers/google";
import { SvelteKitAuth } from "@auth/sveltekit";
import {GOOGLE_CLIENT_ID, GOOGLE_SECRET} from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({ 
    providers: [Google({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_SECRET
    })] 
})
