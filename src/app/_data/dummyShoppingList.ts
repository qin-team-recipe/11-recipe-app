import { ShoppingList } from "@/app/_types";
import { dummyRecipeList as RecipeList } from "@/app/_data/dummyRecipe";

export const dummyShoppingList: ShoppingList[] = [
  {
    id: '1',
    userId: '1',
    recipeId: '1',
    recipe: RecipeList[0],
    shoppingListIngredients: [
      {
        id: '1',
        shoppingListId: '1',
        name: '鶏もも肉 200g',
        isBought: false,
      },
      {
        id: '2',
        shoppingListId: '1',
        name: '玉ねぎ 1個',
        isBought: true,
      },
      {
        id: '3',
        shoppingListId: '1',
        name: '卵 3個',
        isBought: false,
      },
    ],
  }
]