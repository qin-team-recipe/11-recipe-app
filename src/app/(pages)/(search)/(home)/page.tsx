import Link from 'next/link';

import { RecipeListHorizontal } from '@/app/_components/features/recipe/RecipeList';
import { SectionTitle } from '@/app/_components/parts/SectionTitle';

export default function Home() {
  return (
    <div className="space-y-12 px-4 pt-5">
      <section>
        <h2 className="mb-4 text-xl font-bold">話題のシェフ</h2>
        <p>TODO: シェフリスト</p>
      </section>
      <section>
        <SectionTitle title="話題のレシピ" headingLevel='h2'>
          <Link href="/search/recipe">もっと見る</Link>
        </SectionTitle>
        <RecipeListHorizontal recipeList={[]} />
      </section>
      <section>
        <SectionTitle title="シェフ" headingLevel='h2'>
        <Link href="/search/chef">もっと見る</Link>
        </SectionTitle>
        <p>TODO: シェフリスト</p>
      </section>
    </div>
  );
}
