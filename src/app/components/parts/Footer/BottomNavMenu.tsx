'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CartIcon } from './Icons/CartIcon';
import { FavIcon } from './Icons/FavIcon';
import { SearchIcon } from './Icons/SearchIcon';

export const BottomNavMenu = () => {
  const path = usePathname();

  return (
    <nav className="h-footer text-[10px] text-mauve-11">
      <ul className="grid h-full w-full grid-cols-3">
        <li className={path === ('/' || '/search/recipe') ? 'text-tomato-9' : ''}>
          <Link href="/search/recipe" className="flex h-full flex-col items-center justify-center">
            <SearchIcon width={24} height={24} />
            検索
          </Link>
        </li>
        <li className={path === '/fav' ? 'fill-tomato-9 text-tomato-9' : ''}>
          <Link href="/fav" className="flex h-full flex-col items-center justify-center">
            <FavIcon width={24} height={24} />
            お気に入り
          </Link>
        </li>
        <li className={path === '/list' ? 'text-tomato-9' : ''}>
          <Link href="/list" className="flex h-full flex-col items-center justify-center">
            <CartIcon width={24} height={24} />
            お買い物
          </Link>
        </li>
      </ul>
    </nav>
  );
};
