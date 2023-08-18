'use client';

import React, { FC } from 'react';

import { DotsCircleHorizontalButton } from '@/app/_components/parts/ActionButtons/DotsCircleHorizontalButton';
import { PlusButton } from '@/app/_components/parts/ActionButtons/PlusButton';

type Props = {
  title: string;
};

export const ShoppingListHeading: FC<Props> = ({ title }) => {
  const handleMenuOpen = () => {
    console.log('open menu');
  };

  const handleAddItem = () => {
    console.log('add item');
  };
  return (
    <div className="flex items-center bg-mauve-2 px-4 pb-3 pt-5 font-bold">
      <h2 className="flex-1 truncate">{title}</h2>
      <span className="ml-4 flex h-5 w-5 items-center justify-center">
        <PlusButton onClick={handleAddItem} />
      </span>
      <span className="ml-4 flex h-5 w-5 items-center justify-center">
        <DotsCircleHorizontalButton onClick={handleMenuOpen} />
      </span>
    </div>
  );
};
