'use client';

import { FC } from 'react';

import { ShoppingListHeading } from '../common/ShoppingListHeading';
import { ShoppingList as ShoppingListType } from '@/app/_types';

import { ShoppingListItem } from '../common/ShoppingListItem';

type Props = {
  list: ShoppingListType;
};

export const ShoppingList: FC<Props> = ({ list }) => {
  return (
    <ul>
      <ShoppingListHeading title={list.recipe.name} />
      {list.shoppingListIngredients.map((item) => (
        <li key={item.id}>
          <ShoppingListItem item={item} />
        </li>
      ))}
    </ul>
  );
};
