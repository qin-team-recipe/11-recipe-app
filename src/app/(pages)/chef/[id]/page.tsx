import { ChefDetailsInfo } from '@/app/_components/features/chef/ChefDetailsInfo/ChefDetailsInfo';
import { RecipeListTab } from '@/app/_components/features/chef/RecipeListTab';
import { LinkTab } from '@/app/_components/parts/LinkTab';
import { dummyChefList } from '@/app/_data/dummyChef';

const ChefDetailPage = ({ params }: { params: { id: string } }) => {
  const chef = dummyChefList.filter((item) => item.id === params.id);
  if (!chef) return <div></div>;

  const tabs = [
    {
      href: `/chef/${params.id}`,
      label: 'レシピ',
      isCurrent: true,
    },
    {
      href: `/chef/${params.id}/link`,
      label: 'リンク',
      isCurrent: false,
    },
  ];

  const { name, profile, imageUrl, numFollows, numRecipes } = chef[0];

  // TODO: レシピ渡す

  return (
    <div>
      <ChefDetailsInfo
        name={name}
        profile={profile}
        imageUrl={imageUrl}
        numFollows={numFollows}
        numRecipes={numRecipes}
      />
      <LinkTab tabs={tabs} />
      <RecipeListTab recipeList={[]} />
    </div>
  );
};

export default ChefDetailPage;
