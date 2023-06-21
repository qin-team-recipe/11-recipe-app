import { Chef, Like, ShoppingList } from '@/app/_types/Backend';

type RecipeStatus = 'CREATING' | 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED';

export type Recipe = {
  id: string;
  chef: Chef;
  chefId: string;
  name: string;
  overview: string;
  servingSize: number;
  status: RecipeStatus;
  likes: Like[];
  recipeImages: RecipeImage[];
  recipeSteps: RecipeStep[];
  recipeIngredients: RecipeIngredient[];
  shoppingLists: ShoppingList[];
  recipeLinks: RecipeLink[];
};

type RecipeStep = {
  id: string;
  recipe: Recipe;
  recipeId: string;
  step: number;
  description: string;
};

type RecipeIngredient = {
  id: string;
  recipe: Recipe;
  recipeId: string;
  text: string;
};

type RecipeLink = {
  id: string;
  url: string;
  recipe: Recipe;
  recipeId: string;
};

type RecipeImage = {
  id: string;
  recipe: Recipe;
  recipeId: string;
  imageUrl: string;
};