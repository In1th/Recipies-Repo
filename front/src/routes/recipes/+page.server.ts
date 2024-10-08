import type { PageServerLoad  } from "./$types";
import { fail } from '@sveltejs/kit';
import type { TagRow, TagCount, Recipe } from "$lib/models/RecipeDto";

export const load: PageServerLoad  = async ({ fetch }) => {
        const res = await fetch('http://backend:8080/api/v0/recipes');

        if (!res.ok) {
            return fail(
                res.status,
                { message: res.statusText }
            )
        }
        const data = await res.json();

        const categoriesSet = new Set(data.map((recipe: Recipe) => recipe.category.name));
        const cats = Array.from(categoriesSet);

        const tagCounts: TagCount = data.reduce((acc: TagCount, recipe: Recipe) => {
            if (recipe.tags && Array.isArray(recipe.tags)) {
                recipe.tags.forEach(tag => {
                    if (acc[tag.name]) {
                        acc[tag.name].count += 1;
                    } else {
                        acc[tag.name] = { name: tag.name, count: 1 };
                    }
                });
            }
            return acc;
        }, {});

        const arrTags: TagRow[] = Object.values(tagCounts);

        return {
            recipes: data,
            tags: arrTags,
            categories: cats
        }
};