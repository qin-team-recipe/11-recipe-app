'use client';

import { FC, useState } from 'react';

import { ShoppingListInput } from '../common/ShoppingListInput';
import { ShoppingMemo } from '@/app/_types';

import { ShoppingListHeading } from '../common/ShoppingListHeading';
import { ShoppingListItem } from '../common/ShoppingListItem';

type Props = {
  items: ShoppingMemo[];
};

export const ShoppingMemoList: FC<Props> = ({ items }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  if (!items.length) return null;

  return (
    <div>
      <ShoppingListHeading toggleInput={() => setIsInputVisible(true)} title="じぶんメモ" isMemo={true} />
      <ul>
        {items.map((item, i) => (
          <li key={item.id} className="flex">
            <div className="flex-1">
              <ShoppingListItem item={item} isFirst={i === 0} isLast={i === items.length - 1} />
            </div>
          </li>
        ))}
        {isInputVisible && <ShoppingListInput />}
      </ul>
    </div>
  );
};
