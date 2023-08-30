import { ShoppingMemo } from '@/app/_types';

export const dummyShoppingMemo: ShoppingMemo[] = [
  {
    id: '1',
    userId: '1',
    text: 'だしの素',
    isBought: false,
  },
  {
    id: '2',
    userId: '1',
    text: 'みりん',
    isBought: true,
  },
  {
    id: '3',
    userId: '1',
    text: '複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる',
    isBought: false,
  },
];
