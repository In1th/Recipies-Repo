import type { LayoutServerLoad } from "./$types";
import type { LoadEvent, LoadOutput } from "@sveltejs/kit";
import type { Recipe } from "$lib/models/RecipeDto";
import { searchStore } from '$lib/components/searchbar/search';


// export const load: PageServerLoad = async () => {
//     const res = await fetch("http://backend:8080/api/v0/recipes");

//     if (!res.ok) {
//         return fail(
//             res.status,
//             { message: res.statusText }
//         )
//     }

//     const data = await res.json();

//     return {
//         data
//     };
// }