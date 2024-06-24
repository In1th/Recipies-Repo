import { fail, type Load } from "@sveltejs/kit";

export const load: Load = async ({ url, fetch }) => {
    const cat = url.searchParams.get('cat');
    const res = await fetch('http://backend:8080/api/v0/recipes');

    if (!res.ok) {
        return fail(
            res.status,
            { message: res.statusText }
        )
    }
    const data = await res.json();

    return {
        recipes: data
    }
};