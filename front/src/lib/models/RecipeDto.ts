export type RecipeDto = {
    title: string,
    mdFilePath: string,
    imagePath: string,
    preparationTime: string,
    calories: number,
    category: Category,
    recipeIngredients: Ingredient[],
    tags: Tag[],
    rate: number
}

export type Recipe = RecipeDto & {uuid: string}

export type Category = {name: string}
export type Tag = {name: string}
export type Ingredient = {
    ingredient: {
        name: string
    },
    quantity: string
}

export type BaseRecipeFormData = {
    title: string,
    category: string
    ingredients: string,
    tags: string,
    prepTime: string,
    calories: string
}

export type NewRecipeFormData = BaseRecipeFormData & {
    file: File,
    image: File
}

export type UpdateRecipeFormData = BaseRecipeFormData & {
    uuid: string,
    mdFilePath: string,
    imagePath: string
}

export type TagRow = {
    name: string;
    count: number;
};

export type TagCount = {
    [key: string]: TagRow;
};