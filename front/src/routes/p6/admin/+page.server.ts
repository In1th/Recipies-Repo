import { fromNewRecipeData, fromUpdatedRecipeData } from "$lib/mappers";
import type { NewRecipeFormData, UpdateRecipeFormData } from "$lib/models/RecipeDto";
import { BackendClient } from "$lib/server/Cient";
import { redirect, type Actions } from "@sveltejs/kit"
import type { ServerLoad } from "@sveltejs/kit";
import * as fs from 'node:fs';

export const actions: Actions = {
    new: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData()) as NewRecipeFormData;
            const { file, image, title } = data;
    
            await fs.promises.writeFile(
                `/var/resources/recipes/${title.toLowerCase().replaceAll(' ', '_')}.md`,
                await file.text(), {
                    encoding: "utf8",
                    flag: "w",
                }
            );
    
            const extension = image.name.split('.').pop()!;
            await fs.promises.writeFile(
                `/var/resources/images/${title.toLowerCase().replaceAll(' ', '_')}.${extension}`,
                await image.text(), {
                    encoding: "binary",
                    flag: "w",
                }
            );
    
            await BackendClient.newRecipe(event, fromNewRecipeData({...data, imageExtension: extension}));
        } catch (error) {
            console.log(error);
            return { success: false, type: 'update' };
        }

        return { success: true, type: 'new' };
    },

    delete: async (event) => {
        try{
            const formData = Object.fromEntries(await event.request.formData());
            const {uuid} = formData as {uuid: string}
            await BackendClient.deleteRecipe(event, uuid);
        } catch (error) {
            console.log(error);
            return { success: false, type: 'update' };
        }

        return { success: true, type: 'delete' };
    },

    update: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData()) as UpdateRecipeFormData;
            console.log(data);
            console.log(fromUpdatedRecipeData(data));
            // return;
            await BackendClient.updateRecipe(event, fromUpdatedRecipeData(data));
        } catch (error) {
            console.log(error);
            return { success: false, type: 'update' };
        }

        return { success: true, type: 'update' };
    }
}

export const load: ServerLoad = async ({fetch, locals}) => {
    const auth = await locals.auth();
    if (!auth) {
        throw redirect(303, '/p6');
    }

    const resCats = await fetch('http://backend:8080/api/v0/category');
    const resRecipes = await fetch('http://backend:8080/api/v0/recipes');

    return {
        categories: await resCats.json(),
        recipes: await resRecipes.json()
    };
};