'use client';

import { useSearchParams } from 'next/navigation';

import { RecipeListVertical } from '@/app/_components/features/recipe/RecipeList';
import { SearchToggle } from '@/app/_components/features/search/SearchToggle/SearchToggle';

const SearchRecipePage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  // TODO:フィルター処理

  return (
    <section>
      <SearchToggle query={query} type="recipe" />
      <h1 className="mb-2 mt-5 px-4 text-xl font-bold">{query ? `「${query}」で検索` : '話題のレシピ'}</h1>
      <div className="px-4 pb-2">
        <RecipeListVertical recipeList={[]} />
      </div>
    </section>
  );
};

export default SearchRecipePage;
