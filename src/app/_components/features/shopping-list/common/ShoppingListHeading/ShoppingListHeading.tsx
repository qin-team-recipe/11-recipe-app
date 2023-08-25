'use client';

import React, { FC } from 'react';

import { shoppingListMenu, shoppingMemoMenu } from '@/app/_components/features/shopping-list/menus';
import { DotsCircleHorizontalButton } from '@/app/_components/parts/ActionButtons/MenuButtons/DotsCircleHorizontalButton';
import { PlusButton } from '@/app/_components/parts/ActionButtons/PlusButton';

type Props = {
  title: string;
  isMemo?: boolean;
  toggleInput: () => void;
  isFirst?: boolean;
  isLast?: boolean;
};

export const ShoppingListHeading: FC<Props> = ({ title, isMemo = false, toggleInput, isFirst, isLast }) => {
  const handleAddItem = () => {
    toggleInput();
  };

  const menus = isMemo
    ? shoppingMemoMenu
    : isFirst
    ? shoppingListMenu.map((group) => group.filter((item) => item.text !== '上に移動する'))
    : isLast
    ? shoppingListMenu.map((group) => group.filter((item) => item.text !== '下に移動する'))
    : shoppingListMenu;

  return (
    <div className="flex items-center bg-mauve-2 px-4 pb-3 pt-5 font-bold">
      <h2 className="flex-1 truncate">{title}</h2>
      <span className="ml-4 flex h-5 w-5 items-center justify-center">
        <PlusButton onClick={handleAddItem} />
      </span>
      <span className="ml-4 flex h-5 w-5 items-center justify-center">
        <DotsCircleHorizontalButton menus={menus} />
      </span>
    </div>
  );
};
