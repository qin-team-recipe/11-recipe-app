import { ReactNode } from 'react';

export type MenuItem = {
  text: string;
  icon: ReactNode;
  onClick: () => void;
};
export type MenuGroup = MenuItem[];
