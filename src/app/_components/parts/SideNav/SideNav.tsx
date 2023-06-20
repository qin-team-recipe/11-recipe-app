'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { IconChefHat, IconHeart, IconSearch, IconShoppingCart } from '@tabler/icons-react';

export const SideNav = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="sticky top-5 px-5">
      <div className="flex items-center gap-[10px] text-2xl font-bold">
        <IconChefHat size={32} />
        Top Chefs
      </div>
      <ul className="mt-10 space-y-6">
        <li className={segment === '(search)' ? 'text-tomato-9' : ''}>
          <Link href="/" className="flex items-center gap-3">
            <IconSearch size={26} />
            話題を検索
          </Link>
        </li>
        <li className={segment === 'fav' ? 'text-tomato-9' : ''}>
          <Link href="/fav" className="flex items-center gap-3">
            <IconHeart size={26} />
            お気に入り
          </Link>
        </li>
        <li className={segment === 'list' ? 'text-tomato-9' : ''}>
          <Link href="/list" className="flex items-center gap-3">
            <IconShoppingCart size={26} />
            買い物リスト
          </Link>
        </li>
      </ul>
    </div>
  );
};
