import { IconChevronDown, IconChevronUp, IconCircleCheck } from '@tabler/icons-react';

import { MenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/type';

import { handleDeleteItem, handleMoveItemDown, handleMoveItemUp } from './handlers';

export const shoppingListItemsMenu: MenuGroup[] = [
  [
    { text: '上に移動する', icon: <IconChevronUp />, onClick: handleMoveItemUp },
    { text: '下に移動する', icon: <IconChevronDown />, onClick: handleMoveItemDown },
  ],
  [{ text: 'アイテムを削除する', icon: <IconCircleCheck />, onClick: handleDeleteItem }],
];
