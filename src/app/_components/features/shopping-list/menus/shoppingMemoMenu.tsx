import { IconCircleCheck, IconTrash } from '@tabler/icons-react';

import { handleDeleteAll, handleDeleteCompleted } from '@/app/_components/features/shopping-list/menus/handlers';
import { MenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/type';

export const shoppingMemoMenu: MenuGroup[] = [
  [
    { text: '完了したアイテムだけ削除する', icon: <IconCircleCheck />, onClick: handleDeleteCompleted },
    { text: 'すべてのアイテムを削除する', icon: <IconTrash />, onClick: handleDeleteAll },
  ],
];
