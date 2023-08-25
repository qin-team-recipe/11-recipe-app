'use client';

import { FC, useState } from 'react';

import { ShoppingListInput } from '../common/ShoppingListInput';
import { ShoppingList as ShoppingListType } from '@/app/_types';

import { ShoppingListHeading } from '../common/ShoppingListHeading';
import { ShoppingListItem } from '../common/ShoppingListItem';

type Props = {
  list: ShoppingListType;
  isFirst?: boolean;
  isLast?: boolean;
};

export const ShoppingList: FC<Props> = ({ list, isFirst = false, isLast = false }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  return (
    <ul>
      <ShoppingListHeading
        toggleInput={() => setIsInputVisible(true)}
        title={list.recipe.name}
        isFirst={isFirst}
        isLast={isLast}
      />
      {list.shoppingListIngredients.map((item) => (
        <li key={item.id}>
          <ShoppingListItem item={item} />
        </li>
      ))}
      {isInputVisible && <ShoppingListInput />}
    </ul>
  );
};
