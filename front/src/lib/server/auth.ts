import Google from "@auth/core/providers/google";
import { SvelteKitAuth } from "@auth/sveltekit";
import 'dotenv/config';

export const { handle, signIn, signOut } = SvelteKitAuth({ 
    providers: [Google({
        clientId: process.env['GOOGLE_CLIENT_ID'],
        clientSecret: process.env['GOOGLE_SECRET'],
    })] 
})
