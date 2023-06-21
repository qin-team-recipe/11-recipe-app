import { ChefDetailsInfo } from '@/app/_components/features/chef/ChefDetailsInfo/ChefDetailsInfo';
import { dummyChefList } from '@/app/_data/dummyChef';

const ChefDetailPage = ({ params }: { params: { id: string } }) => {
  const chef = dummyChefList.filter((item) => item.id === params.id);
  if (!chef) return <div></div>;

  const { name, profile, imageUrl, numFollows, numRecipes } = chef[0];

  return (
    <div>
      <ChefDetailsInfo
        name={name}
        profile={profile}
        imageUrl={imageUrl}
        numFollows={numFollows}
        numRecipes={numRecipes}
      />
      ChefDetailPage: {params.id}
    </div>
  );
};

export default ChefDetailPage;
