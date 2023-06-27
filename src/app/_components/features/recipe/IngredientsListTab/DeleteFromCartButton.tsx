'use client';

import { FC } from 'react';

import { IconShoppingCartX } from '@tabler/icons-react';

export const DeleteFromCartButton: FC<{ id: string }> = ({ id }) => {
  const handleDeleteFromCart = (id: string) => {
    console.log(id);
    // TODO: add to cart
  };

  return (
    <button className="h-5 w-5 flex-shrink-0" onClick={() => handleDeleteFromCart(id)}>
      <IconShoppingCartX className="h-5 w-5 text-tomato-9" />
    </button>
  );
};
