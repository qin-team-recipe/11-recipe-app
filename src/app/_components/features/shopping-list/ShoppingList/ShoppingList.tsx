'use client';

import { FC } from 'react';

import { ShoppingListHeading } from '../common/ShoppingListHeading';
import { ShoppingList as ShoppingListType } from '@/app/_types';

import { ShoppingListItem } from '../common/ShoppingListItem';

type Props = {
  list: ShoppingListType;
  isFirst?: boolean;
  isLast?: boolean;
};

export const ShoppingList: FC<Props> = ({ list, isFirst = false, isLast = false }) => {
  return (
    <ul>
      <ShoppingListHeading
        title={list.recipe.name}
        isFirst={isFirst}
        isLast={isLast}
      />
      {list.shoppingListIngredients.map((item) => (
        <li key={item.id}>
          <ShoppingListItem item={item} />
        </li>
      ))}
    </ul>
  );
};
