import { RecipeDetailsInfo } from '@/app/_components/features/recipe/RecipeDetailsInfo';
import { StepsListTab } from '@/app/_components/features/recipe/StepsListTab';
import { LinkTab } from '@/app/_components/parts/LinkTab';
import { dummyRecipeList } from '@/app/_data/dummyRecipe';

const RecipeDetailPage = ({ params }: { params: { id: string } }) => {
  const recipe = dummyRecipeList.filter((item) => item.id === params.id);
  if (!recipe) return <div></div>;

  const tabs = [
    {
      href: `/recipe/${params.id}`,
      label: '作り方',
      isCurrent: true,
    },
    {
      href: `/recipe/${params.id}/ingredients`,
      label: '材料',
      isCurrent: false,
    },
  ];

  const { name, overview, recipeImages, numLikes, chef, recipeSteps } = recipe[0];

  return (
    <div>
      <RecipeDetailsInfo name={name} overview={overview} recipeImages={recipeImages} numLikes={numLikes} chef={chef} />
      <LinkTab tabs={tabs} />
      <StepsListTab steps={recipeSteps} />
    </div>
  );
};
export default RecipeDetailPage;
