'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  isSearchPage?: boolean;
};

export const SearchBar = ({ isSearchPage = true }) => {
  const [searchText, setSearchText] = useState('');

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
        className="flex-1 flex bg-mauve-4 h-10 px-4 gap-x-3 font-bold rounded-xl py-1"
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
          type="search"
          value={searchText}
          placeholder="シェフやレシピを検索"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
};
