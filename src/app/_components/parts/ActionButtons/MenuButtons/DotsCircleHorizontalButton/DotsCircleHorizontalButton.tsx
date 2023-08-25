'use client';

import { FC, useState } from 'react';

import { IconDotsCircleHorizontal } from '@tabler/icons-react';

import { Tooltip } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip';
import { MenuGroup } from '@/app/_components/parts/ActionButtons/MenuButtons/Tooltip/type';

type Props = {
  menus: MenuGroup[];
};

export const DotsCircleHorizontalButton: FC<Props> = ({ menus }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <button onClick={toggleMenu} type="button" className="relative text-mauve-12">
      <IconDotsCircleHorizontal size={16.25} />
      {isMenuOpen && <Tooltip menus={menus} />}
    </button>
  );
};
