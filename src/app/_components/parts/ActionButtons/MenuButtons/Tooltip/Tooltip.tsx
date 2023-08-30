import { FC } from 'react';

import { TooltipMenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/TooltipMenuGroup';
import { MenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/type';

type Props = {
  menus: MenuGroup[];
};

export const Tooltip: FC<Props> = ({ menus = [] }) => {
  if (menus.length === 0) return <span />;

  return (
    <ul className="absolute right-0 top-full z-10 flex w-max max-w-[80vw] flex-col rounded border border-mauve-6 bg-[#fff] font-normal text-mauve-11 shadow-sm">
      {menus.map((menu, i) => (
        <TooltipMenuGroup menu={menu} key={i} />
      ))}
    </ul>
  );
};
