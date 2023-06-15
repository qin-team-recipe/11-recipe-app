import Link from 'next/link';

import { RecipeListHorizontal } from '@/app/components/features/recipe/RecipeList';

export default function Home() {
  return (
    <div className="space-y-12 px-4 pt-5">
      <section>
        <h2 className="mb-4 text-xl font-bold">話題のシェフ</h2>
        <p>TODO: シェフリスト</p>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-xl font-bold">話題のレシピ</h2>
          <Link href="/search/recipe">もっと見る</Link>
        </div>
        <RecipeListHorizontal recipeList={[]} />
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-xl font-bold">シェフ</h2>
          <Link href="/search/chef">もっと見る</Link>
        </div>
        <p>TODO: シェフリスト</p>
      </section>
    </div>
  );
}
