import type { RequestHandler } from "@sveltejs/kit";
import * as fs from 'fs';
import Showdown from 'showdown';

export const GET: RequestHandler = async ({ params }) => {
    console.log("GET processing");

    const name = params.id;
    const path = `/var/resources/recipes/${name}.md`;

    try {
        const recipe = await fs.promises.readFile(path, 'utf8');
        const conv = new Showdown.Converter();
        const page = conv.makeHtml(recipe);

        return new Response(JSON.stringify({
            page,
            metadata: name
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
