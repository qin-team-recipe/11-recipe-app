import { KeyboardEvent } from 'react';

import { RedCircle } from '@/app/_components/features/shopping-list/common/ShoppingListItem/RedCircle';
import { shoppingListItemsMenu } from '@/app/_components/features/shopping-list/menus';
import { DotsVerticalButton } from '@/app/_components/parts/ActionButtons/MenuButtons/DotsVerticalButton';

export const ShoppingListInput = () => {
  const handleAddItem = () => {
    // TODO: send request to create new item
    console.log('post new item');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    handleAddItem();
  };

  return (
    <div className="flex items-center border-b border-mauve-6 bg-[#fff] px-4 py-2">
      <button type="button" className="mr-2.5 h-5 w-5 shrink-0">
        <RedCircle />
      </button>
      <input
        type="text"
        onKeyDown={handleKeyPress}
        autoFocus
        onBlur={() => {
          handleAddItem();
        }}
        className="flex-1 focus:outline-none"
      />
      <span className="ml-4 h-5 w-5 shrink-0">
        <DotsVerticalButton menus={shoppingListItemsMenu} />
      </span>
    </div>
  );
};
