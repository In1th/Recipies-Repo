import type { RecipeDto } from "$lib/models/RecipeDto";
import { BackendClient } from "$lib/server/Cient";
import { fail, type Actions } from "@sveltejs/kit"
import type { Load } from "@sveltejs/kit";
import * as fs from 'node:fs';

export const actions: Actions = {
    new: async ({ request, fetch }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData);

        if (
            !(formData.file as File).name ||
            (formData.file as File).name === 'undefined'
        ) {
            return fail(400, {
                error: true,
                message: 'You must provide a file to upload'
            });
        }

        const { file, title, ingredients, tags, prepTime, category } = formData as { 
            file: File, 
            title: string,
            category: string
            ingredients: string,
            tags: string,
            prepTime: string
        };
        
    
        const dto: RecipeDto = {
            title: title,
            category: {name: category},
            recipeIngredients: ingredients? ingredients
                .split('\r\n')
                .map(i => ({ingredient: {name: i},quantity: '1'})): [],
            tags: tags ? tags
                .split('|')
                .map(t => ({name: t})): [],
            mdFilePath: `/var/resources/recipes/${title.toLowerCase().replaceAll(' ', '_')}.md`,
            imagePath: `/var/resources/images/${title.toLowerCase().replaceAll(' ', '_')}.jpg`,
            rate: 1
            // preparationTime: prepTime
        }

        const res = await fetch('http://backend:8080/api/v0/recipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dto)
        });

        if (!res.ok) {
            console.log(await res.json())
            console.log(dto)
            return fail(400)
        }

        await fs.promises.writeFile(
            `/var/resources/recipes/${title.toLowerCase().replaceAll(' ', '_')}.md`,
            await file.text(), {
                encoding: "utf8",
                flag: "w",
            }
        );

        return { success: true };
    },

    delete: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());
        const {uuid} = formData as {uuid: string}
        await BackendClient.deleteRecipe(event, uuid);

        return { success: true };
    },

    update: async (event) => {
        console.log(await event.request.formData());

        return { success: true };
    }
}

export const load: Load = async ({fetch}) => {
    const resCats = await fetch('http://backend:8080/api/v0/category');
    const resRecipes = await fetch('http://backend:8080/api/v0/recipes');

    return {
        categories: await resCats.json(),
        recipes: await resRecipes.json()
    };
};