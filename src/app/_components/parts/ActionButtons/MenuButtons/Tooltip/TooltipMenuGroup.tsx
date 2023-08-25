import React, { FC } from 'react';

import { MenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/type';

type Props = {
  menu: MenuGroup;
};

export const TooltipMenuGroup: FC<Props> = ({ menu }) => {
  return (
    <ul className="space-y-3 border-b border-mauve-6 px-3 py-2.5">
      {menu.map((item) => (
        <li className="flex items-center space-x-2" onClick={item.onClick} key={item.text}>
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">{item.icon}</span>
          <span className="flex-1 text-left">{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
