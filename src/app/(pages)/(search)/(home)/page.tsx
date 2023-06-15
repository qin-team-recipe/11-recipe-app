import { RecipeListHorizontal, RecipeListVertical } from '@/app/components/features/recipe/RecipeList';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='space-y-12 pt-5 px-4'>
      <section>
        <h2 className='text-xl font-bold mb-4'>話題のシェフ</h2>
        <RecipeListHorizontal recipeList={[]} />
      </section>
      <section>
        <div className="flex justify-between items-center">
          <h2 className='text-xl font-bold mb-4'>話題のレシピ</h2>
          <Link href='/search/recipe'>もっと見る</Link>
        </div>
        <RecipeListVertical recipeList={[]} />
      </section>
      <section>
        <div className="flex justify-between items-center">
          <h2 className='text-xl font-bold mb-4'>シェフ</h2>
          <Link href='/search/chef'>もっと見る</Link>
        </div>
        <RecipeListVertical recipeList={[]} />
      </section>
    </div>
  );
}
