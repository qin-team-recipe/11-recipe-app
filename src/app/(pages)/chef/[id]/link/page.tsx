import { ChefDetailsInfo } from '@/app/_components/features/chef/ChefDetailsInfo/ChefDetailsInfo';
import { LinkTab } from '@/app/_components/parts/LinkTab';
import { dummyChefList } from '@/app/_data/dummyChef';

const ChefLinksPage = ({ params }: { params: { id: string } }) => {
  const chef = dummyChefList.filter((item) => item.id === params.id);
  if (!chef) return <div></div>;

  const tabs = [
    {
      href: `/chef/${params.id}`,
      label: 'レシピ',
      isCurrent: false,
    },
    {
      href: `/chef/${params.id}/link`,
      label: 'リンク',
      isCurrent: true,
    },
  ];

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
      <LinkTab tabs={tabs} />
      ChefLinksPage: {params.id}
    </div>
  );
};

export default ChefLinksPage;
