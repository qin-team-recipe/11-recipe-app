'use client';

import { FC } from 'react';

import { ShoppingListHeading } from '../common/ShoppingListHeading';
import { ShoppingMemo } from '@/app/_types';

import { ShoppingListItem } from '../common/ShoppingListItem';

type Props = {
  items: ShoppingMemo[];
};

export const ShoppingMemoList: FC<Props> = ({ items }) => {
  if (!items.length) return <div>ShoppingList is empty</div>;

  return (
    <div>
      <ShoppingListHeading title="じぶんメモ" />
      <ul>
        {items.map((item, i) => (
          <li key={item.id} className="flex">
            <div className="flex-1">
              <ShoppingListItem item={item} isFirst={i === 0} isLast={i === items.length - 1} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
