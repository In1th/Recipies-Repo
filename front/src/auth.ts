import Auth0 from "@auth/core/providers/auth0"
import  { SvelteKitAuth } from "@auth/sveltekit"
 
export const { signIn, signOut, handle } = SvelteKitAuth({
  providers: [Auth0({
    issuer: "https://dev-ceqe1dwsh47i6qg4.us.auth0.com",
    profile(profile) {
      return {
        id: profile.user_id,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        app_metadata: profile.app_metadata
      };
    },
  })],
  trustHost: true
})