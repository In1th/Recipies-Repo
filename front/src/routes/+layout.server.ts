import type { LayoutServerLoad } from "./$types"

import { fail } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ fetch, locals }) => {

    const res = await fetch('http://backend:8080/api/v0/recipes');

    if (!res.ok) {
        return fail(
            res.status,
            { message: res.statusText }
        )
    }
    const data = await res.json();

    return {
        recipes: data,
        session: await locals.auth(),
    }
};