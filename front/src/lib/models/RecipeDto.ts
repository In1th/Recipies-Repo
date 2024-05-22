export type RecipeDto = {
    title: string,
    mdFilePath: string,
    imagePath: string,
    // preparationTime: string,
    category: Category,
    recipeIngredients: Ingredient[],
    tags: Tag[],
    rate: number
}

export type Category = {name: string}
export type Tag = {name: string}
export type Ingredient = {
    ingredient: {
        name: string
    },
    quantity: string
}