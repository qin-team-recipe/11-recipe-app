'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Spinner } from '@/app/search/components/Spinner';
import { useDebounce } from '@/app/search/hooks/useDebounce';

type Props = {
  isSearchPage?: boolean;
};

export const SearchBar: FC<Props> = ({ isSearchPage = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, isDebouncing] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    // TODO: 検索が空の場合に走らせるかを検討
    // if (debouncedSearchTerm === '') return;
    performSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const performSearch = (value: string) => {
    console.log('Searching for:', value);
    // TODO: 検索処理
  };

  return (
    <div className="w-full flex items-center gap-x-4">
      {isSearchPage && (
        <button type="button" className="flex-shrink-0">
          <Image
            src="/assets/icons/BackIcon-dark.svg"
            alt="戻る"
            width={20}
            height={20}
          />
        </button>
      )}
      <form
        action=""
        className="flex-1 flex items-center bg-mauve-4 h-10 px-4 gap-x-3 font-bold rounded-xl py-1"
      >
        {!isSearchPage && (
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/icons/SearchIcon.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
        )}
        <input
          className="flex-1 bg-transparent outline-none text-mauve-12 placeholder:text-mauve-9"
          type="text"
          value={searchTerm}
          placeholder="シェフやレシピを検索"
          onChange={handleSearchChange}
        />
        <div className="w-5 h-5 flex items-center">
          {isDebouncing ? (
            <Spinner />
          ) : searchTerm ? (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
              }}
            >
              <Image
                src="/assets/icons/CloseIcon.svg"
                alt=""
                width={20}
                height={20}
              />
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};
