import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  bg?: string;
};

export const PageHead: FC<Props> = ({ children, bg = '' }) => {
  return (
    <div
      className={`leading-0 flex h-12 w-full items-center justify-center border-b border-mauve-6 text-xl font-bold ${bg}`}
    >
      {children}
    </div>
  );
};
