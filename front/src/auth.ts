import Auth0 from "@auth/core/providers/auth0"
import  { SvelteKitAuth } from "@auth/sveltekit"
 
export const { signIn, signOut, handle } = SvelteKitAuth({
  providers: [Auth0({
    issuer: "https://dev-qoxpitnq3yeaai2x.us.auth0.com"
  })],
})