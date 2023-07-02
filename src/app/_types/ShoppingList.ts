import { Recipe, ShoppingListIngredient } from '@/app/_types';

export type ShoppingList = {
  id: string;
  // user: User;
  userId: string;
  recipe: Recipe;
  recipeId: string;
  // sortOrder: number;
  shoppingListIngredients: ShoppingListIngredient[];
};
