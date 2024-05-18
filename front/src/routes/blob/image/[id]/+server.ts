import type { RequestHandler } from "@sveltejs/kit";
import * as fs from 'fs';

export const GET: RequestHandler = async ({params}) => {

    const data = await fs.promises.readFile(`/var/resources/recipes/${params.id}.md`, 'utf8');
    
    return new Response(data);
};