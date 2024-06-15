import type { RequestEvent } from "@sveltejs/kit";

export class BackendClient {
    static readonly url = 'http://backend:8080/api/v0/';
    
    static async deleteRecipe({fetch}: RequestEvent, id: string) {
        console.log(id)
        const res = await fetch('http://backend:8080/api/v0/recipes/' + id, { method: 'DELETE' });
        if (!res.ok){
            throw Error(`response did not indicate success: ${res.status} (${res.statusText})`)
        }
    }
}