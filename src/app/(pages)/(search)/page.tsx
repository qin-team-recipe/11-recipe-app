import { RecipeListHorizontal, RecipeListVertical } from '@/app/components/features/recipe/RecipeList';

export default function Home() {
  return (
    <main>
      <div className='h-8'/> {/* 後で削除 */}
      <RecipeListHorizontal recipeList={[]} />
      <div className='h-8'/> {/* 後で削除 */}
      <RecipeListVertical recipeList={[]} />
    </main>
  );
}
