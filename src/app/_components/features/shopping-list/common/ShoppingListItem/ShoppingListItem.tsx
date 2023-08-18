'use client';

import { FC } from 'react';

import { DotsVerticalButton } from '@/app/_components/parts/ActionButtons/DotsVerticalButton';
import { ShoppingListIngredient, ShoppingMemo } from '@/app/_types';

import { CheckIcon } from './CheckIcon';
import { RedCircle } from './RedCircle';

type Props = {
  item: ShoppingListIngredient | ShoppingMemo;
};

export const ShoppingListItem: FC<Props> = ({ item }) => {
  // check if item is ShoppingListIngredient or ShoppingMemo and render accordingly

  const handleToggle = () => {
    // toggle item.isBought
    console.log('toggle item.isBought');
  };

  const openMenu = () => {
    console.log('open menu');
  };

  const title = 'name' in item ? item.name : item.text;

  return (
    <div className="flex items-center border-b border-mauve-6 bg-[#fff] px-4 py-2">
      <button onClick={handleToggle} type="button" className="mr-2.5 h-5 w-5 shrink-0">
        {item.isBought ? <CheckIcon /> : <RedCircle />}
      </button>
      <p className="flex-1">{title}</p>
      <span className="ml-4 h-5 w-5 shrink-0">
        <DotsVerticalButton onClick={openMenu} />
      </span>
    </div>
  );
};
