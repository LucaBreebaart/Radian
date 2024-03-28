import { Ingredients } from "./ingredients.model";

export interface Products {

    productId: number;
    ingredientId: number;
    recipeId: number;
    amount: number;
    ingredient: Ingredients;
}
