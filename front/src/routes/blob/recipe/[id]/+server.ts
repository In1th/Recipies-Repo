import type { RequestHandler } from "@sveltejs/kit";
import * as fs from 'fs';
import {Converter} from 'showdown';

export const GET: RequestHandler = async ({params}) => {

    const data = await fs.promises.readFile(`/var/resources/recipes/${params.id}.md`, 'utf8');
    const conv = new Converter();

    return new Response(conv.makeHtml(data));
};