import type { RequestHandler } from "@sveltejs/kit";
import * as fs from 'fs';

export const GET: RequestHandler = async ({params}) => {

    const data = await fs.promises.readFile(`/var/resources/images/${params.name}`);
    
    return new Response(data, {
        headers: {'Content-Type': 'image/jpg'}
    });
};