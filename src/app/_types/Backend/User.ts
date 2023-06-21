import { Chef, Follow, Like, ShoppingList, ShoppingMemo } from '@/app/_types/Backend';

export type User = {
  id: string;
  name: string;
  email: string;
  chef?: Chef;
  follows: Follow[];
  likes: Like[];
  shoppingLists: ShoppingList[];
  shoppingMemos: ShoppingMemo[];
};
