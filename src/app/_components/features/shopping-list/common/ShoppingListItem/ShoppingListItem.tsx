'use client';

import { FC } from 'react';

import { shoppingListItemsMenu } from '@/app/_components/features/shopping-list/menus';
import { DotsVerticalButton } from '@/app/_components/parts/ActionButtons/MenuButtons/DotsVerticalButton';
import { ShoppingListIngredient, ShoppingMemo } from '@/app/_types';

import { CheckIcon } from './CheckIcon';
import { RedCircle } from './RedCircle';

type Props = {
  item: ShoppingListIngredient | ShoppingMemo;
  isFirst?: boolean;
  isLast?: boolean;
};

export const ShoppingListItem: FC<Props> = ({ item, isFirst = false, isLast = false }) => {
  // check if item is ShoppingListIngredient or ShoppingMemo and render accordingly

  const handleToggle = () => {
    // toggle item.isBought
    console.log('toggle item.isBought');
  };

  const title = 'name' in item ? item.name : item.text;

  const menus = isFirst
    ? shoppingListItemsMenu.map((group) => group.filter((item) => item.text !== '上に移動する'))
    : isLast
    ? shoppingListItemsMenu.map((group) => group.filter((item) => item.text !== '下に移動する'))
    : shoppingListItemsMenu;

  return (
    <div className="flex items-center border-b border-mauve-6 bg-[#fff] px-4 py-2">
      <button onClick={handleToggle} type="button" className="mr-2.5 h-5 w-5 shrink-0">
        {item.isBought ? <CheckIcon /> : <RedCircle />}
      </button>
      <p className="flex-1">{title}</p>
      <span className="ml-4 h-5 w-5 shrink-0">
        <DotsVerticalButton menus={menus} />
      </span>
    </div>
  );
};
