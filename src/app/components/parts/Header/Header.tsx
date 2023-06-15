import { FC, ReactNode } from 'react';

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <header className="leading-0 flex h-12 w-full items-center justify-center border-b border-mauve-6 text-xl font-bold">
      {children}
    </header>
  );
};
