import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const getRecipes = async () => {
        console.log("getting data !");
        const res = await fetch("http://backend:8080/api/v0/recipes");
        const data = await res.json();

        console.log("data json:");
        console.log(data);

        return data;
    }

    const recipes = await getRecipes();

    return {
        recipes
    };
}