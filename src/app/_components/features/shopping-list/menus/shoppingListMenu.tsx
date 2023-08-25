import { IconChefHat, IconChevronDown, IconChevronUp, IconCircleCheck, IconTrash } from '@tabler/icons-react';

import {
  handleDeleteAll,
  handleDeleteCompleted,
  handleMoveListDown,
  handleMoveListUp,
  handleViewDetails,
} from '@/app/_components/features/shopping-list/menus/handlers';
import { MenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/type';

export const shoppingListMenu: MenuGroup[] = [
  [
    { text: 'レシピ詳細を見る', icon: <IconChefHat />, onClick: handleViewDetails },
    { text: '上に移動する', icon: <IconChevronUp />, onClick: handleMoveListUp },
    { text: '下に移動する', icon: <IconChevronDown />, onClick: handleMoveListDown },
  ],
  [
    { text: '完了したアイテムだけ削除する', icon: <IconCircleCheck />, onClick: handleDeleteCompleted },
    { text: 'レシピを買い物リストから削除する', icon: <IconTrash />, onClick: handleDeleteAll },
  ],
];
