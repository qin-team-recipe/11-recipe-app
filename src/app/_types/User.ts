import { Chef, ShoppingList, ShoppingMemo } from '@/app/_types';

export type User = {
  id: string;
  name: string;
  email: string;
  chef?: Chef;
  // follows: Follow[];
  numFollows: number;
  // likes: Like[];
  numLikes: number;
  shoppingLists: ShoppingList[];
  shoppingMemos: ShoppingMemo[];
};
