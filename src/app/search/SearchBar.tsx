'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Spinner } from '@/app/search/components/Spinner';

type Props = {
  isSearchPage?: boolean;
};

export const SearchBar: FC<Props> = ({ isSearchPage = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isDebouncing, setIsDebouncing] = useState(false);

  let debounceTimeout: NodeJS.Timeout;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    // If the search term is empty, don't debounce
    if (value === '') return;

    setIsDebouncing(true);
    clearTimeout(debounceTimeout);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setIsDebouncing(false);
      setDebouncedSearchTerm('');
      return;
    }
    setIsDebouncing(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    debounceTimeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsDebouncing(false);
    }, 1000);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm]);

  useEffect(() => {
    performSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const performSearch = (value: string) => {
    console.log('Searching for:', value);
    // Perform your search operation here
  };

  return (
    <div className="w-full flex items-center gap-x-4">
      {/* {isDebouncing && <p>Debouncing...</p>} */}
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
