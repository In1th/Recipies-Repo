import { fail, type Load } from "@sveltejs/kit";
import Showdown from 'showdown';
import * as fs from 'fs';

export const load: Load = async ({ params }) => {
    console.log("Load() processing");
    const name = 'instant_pot_asian_pulled_pork'; // Zakładam, że nazwa pliku jest w params.name
    const path = `/var/resources/recipes/${name}.md`;

    try {
        console.log("BEFORE readFile()");
        const data = await fs.promises.readFile(path, 'utf8');
        const conv = new Showdown.Converter();
        const recipe = conv.makeHtml(data);

        console.log("recipe log");
        console.log(recipe);

        return {
            recipe,
            metadata: name
        };
    } catch (error) {
        console.error(error);
        return fail(500, { message: 'Could not load the recipe file.' });
    }
};
