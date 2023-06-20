'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation';

import { Spinner } from './_Spinner';
import { useDebounce } from './useDebounce';

export const SearchBar = () => {
  const segment = useSelectedLayoutSegment();
  const isSearchPage = segment === 'search';

  const path = usePathname().split('/');
  const searchType = path[path.length - 1] || 'recipe'; // recipe or chef

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, isDebouncing] = useDebounce(searchTerm, 1000);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    const performSearch = (value: string) => {
      router.push(`/search/${searchType}?q=${value}`);
    };
    if (!hasTypedRef.current) return;
    performSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, searchType, router]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    hasTypedRef.current = true;
  };

  const handleBackButtonClick = () => {
    setSearchTerm('');
    router.push('/');
  };

  return (
    <div className="flex w-full items-center gap-x-4 border-b border-mauve-6 px-4 py-2">
      {/* 検索ページでのみ戻るボタンを表示 */}
      {isSearchPage && (
        <button className="flex-shrink-0" onClick={handleBackButtonClick}>
          <Image src="/assets/icons/BackIcon-dark.svg" alt="戻る" width={20} height={20} />
        </button>
      )}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-10 flex-1 items-center gap-x-3 rounded-xl bg-mauve-4 px-4 py-1 font-bold"
      >
        {/* // TOPページのみ検索アイコンを表示 */}
        {!isSearchPage && (
          <div className="flex flex-shrink-0 items-center">
            <Image src="/assets/icons/SearchIcon.svg" alt="" width={20} height={20} />
          </div>
        )}
        <input
          className="flex-1 bg-transparent text-mauve-12 outline-none placeholder:text-mauve-9"
          type="text"
          value={searchTerm}
          placeholder="シェフやレシピを検索"
          onChange={handleSearchChange}
        />
        <div className="flex h-5 w-5 items-center">
          {/* Debounce中はSpinnerを表示 */}
          {/* Debounce中でなく、検索文字列が空でない場合はクリアボタンを表示 */}
          {isDebouncing ? (
            <Spinner />
          ) : searchTerm ? (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
              }}
            >
              <Image src="/assets/icons/CloseIcon.svg" alt="" width={20} height={20} />
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};
