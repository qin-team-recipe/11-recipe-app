'use client';

import { useSearchParams } from 'next/navigation';

import { SearchToggle } from '@/app/components/features/search/SearchToggle/SearchToggle';

const SearchChefPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  // TODO:フィルター処理

  return (
    <section>
      <SearchToggle query={query} type="chef" />
      <h1 className="mb-2 mt-5 px-4 text-xl font-bold">{query ? `「${query}」で検索` : 'シェフ一覧'}</h1>
      <div className="px-4 pb-2">
        <p>TODO:ChefList</p>
      </div>
    </section>
  );
};

export default SearchChefPage;
