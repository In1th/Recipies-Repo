import type { Recipe } from "$lib/models";
import type { RequestHandler } from "@sveltejs/kit";
import * as fs from 'fs';
import Showdown from 'showdown';

export const GET: RequestHandler = async ({ params }) => {

    const res = await fetch(`http://backend:8080/api/v0/recipes/${params.id}`);
    const data = await res.json() as Recipe;

    try {
        const recipe = await fs.promises.readFile(data.mdFilePath, 'utf8');
        const conv = new Showdown.Converter();
        const page = conv.makeHtml(recipe);

        return new Response(JSON.stringify({
            page,
            metadata: data
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Could not load the recipe file.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
