import { RecipeDetailsInfo } from '@/app/_components/features/recipe/RecipeDetailsInfo';
import { StepsList } from '@/app/_components/features/recipe/StepsList';
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
      <StepsList steps={recipeSteps} />
    </div>
  );
};
export default RecipeDetailPage;
