import { IngredientsList } from '@/app/_components/features/recipe/IngredientsList';
import { RecipeDetailsInfo } from '@/app/_components/features/recipe/RecipeDetailsInfo';
import { LinkTab } from '@/app/_components/parts/LinkTab';
import { dummyRecipeList } from '@/app/_data/dummyRecipe';

const RecipeIngredientsPage = ({ params }: { params: { id: string } }) => {
  const recipe = dummyRecipeList.filter((item) => item.id === params.id);
  if (!recipe) return <div></div>;

  const tabs = [
    {
      href: `/recipe/${params.id}`,
      label: '作り方',
      isCurrent: false,
    },
    {
      href: `/recipe/${params.id}/ingredients`,
      label: '材料',
      isCurrent: true,
    },
  ];

  const { name, overview, recipeImages, numLikes, chef, recipeIngredients } = recipe[0];

  return (
    <div>
      <RecipeDetailsInfo name={name} overview={overview} recipeImages={recipeImages} numLikes={numLikes} chef={chef} />
      <LinkTab tabs={tabs} />
      <IngredientsList ingredients={recipeIngredients} />
    </div>
  );
};
export default RecipeIngredientsPage;
