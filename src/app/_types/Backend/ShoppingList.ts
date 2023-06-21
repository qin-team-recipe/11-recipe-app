import { Recipe, ShoppingListIngredient, User } from '@/app/_types/Backend';

export type ShoppingList = {
  id: string;
  user: User;
  userId: string;
  recipe: Recipe;
  recipeId: string;
  sortOrder: number;
  shoppingListIngredients: ShoppingListIngredient[];
};
