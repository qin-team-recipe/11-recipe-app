import { User } from '@/app/_types/Backend';

export type ShoppingMemo = {
  id: string;
  user: User;
  userId: string;
  text: string;
  isBought: boolean;
};
