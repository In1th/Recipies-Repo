import type { Ingredient, NewRecipeFormData, Recipe, RecipeDto, Tag, UpdateRecipeFormData } from "$lib/models/RecipeDto";

export const fromNewRecipeData = (recipe: NewRecipeFormData & {imageExtension: string}) => ({
    title: recipe.title,
    category: {name: recipe.category},
    recipeIngredients: toIngredients(recipe.ingredients),
    tags: toTags(recipe.tags),
    prepTime: recipe.calories,
    mdFilePath: `/var/resources/recipes/${recipe.title.toLowerCase().replaceAll(' ', '_')}.md`,
    imagePath: `/var/resources/images/${recipe.title.toLowerCase().replaceAll(' ', '_')}.${recipe.imageExtension}`,
    rate: 1,
    calories: parseFloat(recipe.calories)
}) as RecipeDto;

export const fromUpdatedRecipeData = (recipe: UpdateRecipeFormData) => ({
    uuid: recipe.uuid,
    title: recipe.title,
    category: {name: recipe.category},
    recipeIngredients: toIngredients(recipe.ingredients),
    tags: toTags(recipe.tags),
    mdFilePath: recipe.mdFilePath,
    imagePath: recipe.imagePath,
    rate: 1,
    calories: parseFloat(recipe.calories)
}) as Recipe;

const toTags = (tags: string) => tags ? tags
    .split('|')
    .map(t => ({name: t})): [];

const toIngredients = (ingredients: string) => ingredients? ingredients
.split('\r\n')
.map(i => ({ingredient: {name: i},quantity: '1'})): []