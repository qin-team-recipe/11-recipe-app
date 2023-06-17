import { FC, ReactNode } from 'react';

export const PageHead: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="leading-0 flex h-12 w-full items-center justify-center border-b border-mauve-6 text-xl font-bold">
      {children}
    </div>
  );
};
