import type { RequestHandler } from "@sveltejs/kit";
import * as fs from 'node:fs';
import Showdown from 'showdown';

export const GET: RequestHandler = async ({params, fetch}) => {

    const res = await fetch(`http://backend:8080/api/v0/recipes/${params.id}`);
    const data = await res.json();

    const recipe = await fs.promises.readFile(data.mdFilePath, 'utf8');
    const conv = new Showdown.Converter();

    return new Response(JSON.stringify({
        page: conv.makeHtml(recipe),
        metadata: data
    }));
};