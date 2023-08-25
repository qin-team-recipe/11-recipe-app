import { ReactNode } from 'react';

export type MenuItem = {
  text: string;
  icon: ReactNode;
  onClick: () => void;
  dividerBottom?: boolean;
};
export type MenuGroup = MenuItem[];
