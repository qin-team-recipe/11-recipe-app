import { Chef } from '@/app/_types';

type RecipeStatus = 'CREATING' | 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED';

export type Recipe = {
  id: string;
  chef: Chef;
  chefId: string;
  name: string;
  overview: string;
  servingSize: number;
  status: RecipeStatus;
  // likes: Like[];
  recipeImages: RecipeImage[];
  recipeSteps: RecipeStep[];
  recipeIngredients: RecipeIngredient[];
  // shoppingLists: ShoppingList[];
  // recipeLinks: RecipeLink[];
} & {
  numLikes: number; // FE only
  isPublic: boolean; // FE only
};

export type RecipeStep = {
  id: string;
  // recipe: Recipe;
  recipeId: string;
  step: number;
  description: string;
};

export type RecipeIngredient = {
  id: string;
  // recipe: Recipe;
  recipeId: string;
  text: string;
};
// & {
//   inShoppingList: boolean; // FE only
// };

// type RecipeLink = {
//   id: string;
//   url: string;
//   recipe: Recipe;
//   recipeId: string;
// };

type RecipeImage = {
  id: string;
  // recipe: Recipe;
  recipeId: string;
  imageUrl: string;
};
