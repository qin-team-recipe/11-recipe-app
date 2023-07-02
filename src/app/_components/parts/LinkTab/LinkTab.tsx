import { FC } from 'react';
import Link from 'next/link';

type TabInfo = {
  href: string;
  label: string;
  isCurrent: boolean;
};

type Props = {
  tabs: TabInfo[];
};

export const LinkTab: FC<Props> = ({ tabs }) => {
  return (
    <div className={`grid w-full grid-cols-${tabs.length} font-bold`}>
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={`${tab.isCurrent ? 'border-b-2 border-mauve-12' : ''} flex h-10 items-center justify-center`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};
