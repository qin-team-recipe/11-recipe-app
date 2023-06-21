import { RecipeDetailsInfo } from '@/app/_components/features/recipe/RecipeDetailsInfo';
import { dummyRecipeList } from '@/app/_data/dummyRecipe';

const RecipeDetailPage = ({ params }: { params: { id: string } }) => {
  const recipe = dummyRecipeList.filter((item) => item.id === params.id);
  if (!recipe) return <div></div>;

  const { name, overview, recipeImages, numLikes, chef } = recipe[0];

  return (
    <div>
      <RecipeDetailsInfo name={name} overview={overview} recipeImages={recipeImages} numLikes={numLikes} chef={chef} />
      RecipeDetailPage: {params.id}
    </div>
  );
};
export default RecipeDetailPage;
