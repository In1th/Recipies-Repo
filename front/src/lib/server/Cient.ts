import type { Recipe, RecipeDto } from "$lib/models/RecipeDto";
import type { RequestEvent } from "@sveltejs/kit";

export class BackendClient {
    static readonly url = 'http://backend:8080/api/v0';
    
    static async newRecipe({fetch}: RequestEvent, recipe: RecipeDto) {
        const res = await fetch(`${BackendClient.url}/recipes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe)
        });
        if (!res.ok){
            throw Error(`response did not indicate success: ${res.status} (${res.statusText})`)
        }
    }

    static async deleteRecipe({fetch}: RequestEvent, id: string) {
        const res = await fetch(`${BackendClient.url}/recipes/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok){
            throw Error(`response did not indicate success: ${res.status} (${res.statusText})`)
        }
    }

    static async updateRecipe({fetch}: RequestEvent, recipe: Recipe) {
        const {uuid, ...dto} = recipe;
        const res = await fetch(`${BackendClient.url}/recipes/${uuid}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dto)
        });
        if (!res.ok){
            console.log(recipe);
            throw Error(`response did not indicate success: ${res.status} (${res.statusText})`)
        }
    }
}