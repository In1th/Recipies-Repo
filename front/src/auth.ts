import { credentialsSchema } from "$lib"
import Credentials from "@auth/core/providers/credentials"
import  { SvelteKitAuth } from "@auth/sveltekit"
 
declare module "@auth/sveltekit" {
  interface User {
    userId: string
    isAdmin: boolean
  }
}
 
export const { signIn, signOut, handle } = SvelteKitAuth({
    providers: [
        Credentials({
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          credentials: {
            email: {},
            password: {},
          },
          authorize: async (credentials) => {
            let user = {
                userId: "1",
                isAdmin: false
            }

            const {email, password} = await credentialsSchema.parseAsync(credentials);
     
            if (email === "admin@admin.com" && password === "admin") {
                user.isAdmin = true;
            }
     
            return user
          },
        }),
      ],
})