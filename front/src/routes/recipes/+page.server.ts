import type { Load } from "@sveltejs/kit";

export const load: Load = async ({fetch}) => {
    const res = await fetch('http://backend:8080/api/v0/recipes');
    const data = await res.json();

    return {
        recipes: data
    } 
};