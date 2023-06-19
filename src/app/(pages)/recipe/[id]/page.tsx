import { DetailsHead } from '@/app/components/parts/DetailsHead';
import { dummyRecipeList } from '@/app/data/dummyRecipe';

const RecipeDetailPage = ({ params }: { params: { id: string } }) => {
  const { name, description, image } = dummyRecipeList[0];
  return (
    <div>
      <DetailsHead title={name} description={description} image={image} />
      RecipeDetailPage: {params.id}
    </div>
  );
};
export default RecipeDetailPage;
