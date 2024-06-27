import Auth0 from "@auth/core/providers/auth0"
import  { SvelteKitAuth } from "@auth/sveltekit"
 
export const { signIn, signOut, handle } = SvelteKitAuth({
  providers: [Auth0({
    issuer: "https://dev-qoxpitnq3yeaai2x.us.auth0.com",
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
  trustHost: true,
  redirectProxyUrl: 'http://149.156.43.57/p6'
})