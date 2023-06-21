import { ShoppingList } from '@/app/_types/Backend';

export type ShoppingListIngredient = {
  id: string;
  shoppingList: ShoppingList;
  shoppingListId: string;
  name: string;
  isBought: boolean;
};
