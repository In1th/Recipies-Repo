import { fail, type Load } from "@sveltejs/kit";
import Showdown from 'showdown';

export const load: Load = async ({ fetch }) => {
    const path = 'instant_pot_asian_pulled_pork.md';

    try {
        const data = await fetch(path);
        const recipe = await data.text()

        const conv = new Showdown.Converter();
        return {
            recipe: conv.makeHtml(recipe),
            metadata: path
        };
    } catch (error) {
        return fail(500, { message: 'Could not load the recipe file.' });
    }
};