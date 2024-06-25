import type { PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {

    console.log("getting data page !");
    const res = await fetch("http://backend:8080/api/v0/recipes");

    if (!res.ok) {
        return fail(
            res.status,
            { message: res.statusText }
        )
    }

    const data = await res.json();

    console.log("data json:");
    console.log(data);

    return {
        data
    };
}