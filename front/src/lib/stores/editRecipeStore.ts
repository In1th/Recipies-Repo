import type { Recipe } from "$lib/models/RecipeDto";
import { writable } from "svelte/store";

export const editRecipeStore = writable<Recipe | undefined>(undefined);