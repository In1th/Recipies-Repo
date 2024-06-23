import { fail } from '@sveltejs/kit';
import * as fs from 'fs/promises';

export async function load() {

    //K1: powinno sie pobrac wszystkie rekordy z przepisami z bazy jako json

    try {
        const dirPath = '/var/resources/recipes';
        const files = await fs.readdir(dirPath);

        const recipes = await Promise.all(files.map(async (file) => {
            const content = await fs.readFile(`${dirPath}/${file}`, 'utf8');
            return { file, content };
        }));

        return { recipes };
    } catch (error) {
        console.error(error);
        return fail(500, { message: 'Could not load the recipes.' });
    }
}
