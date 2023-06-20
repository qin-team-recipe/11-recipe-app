import { RecipeDetailsInfo } from '@/app/_components/features/recipe/RecipeDetailsInfo';
import { dummyRecipeList } from '@/app/_data/dummyRecipe';

const RecipeDetailPage = ({ params }: { params: { id: string } }) => {
  const { name, description, image } = dummyRecipeList[0];
  return (
    <div>
      <RecipeDetailsInfo
        name={name}
        description={description}
        image={image}
        numLikes={100}
        chefId="1"
        chefName="しまぶ―"
        chefImage="/assets/dummyImage_200_300.png"
      />
      RecipeDetailPage: {params.id}
    </div>
  );
};
export default RecipeDetailPage;
