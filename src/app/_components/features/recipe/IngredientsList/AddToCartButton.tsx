'use client';

import { FC } from 'react';

import { IconShoppingCartPlus } from '@tabler/icons-react';

export const AddToCartButton: FC<{ id: string }> = ({ id }) => {
  const handleAddToCart = (id: string) => {
    console.log(id);
    // TODO: add to cart
  };
  
  return (
    <button className="h-5 w-5 flex-shrink-0" onClick={() => handleAddToCart(id)}>
      <IconShoppingCartPlus className="h-5 w-5" />
    </button>
  );
};
