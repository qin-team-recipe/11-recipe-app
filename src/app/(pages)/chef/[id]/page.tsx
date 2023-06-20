import { ChefDetailsInfo } from '@/app/_components/features/chef/ChefDetailsInfo/ChefDetailsInfo';

const ChefDetailPage = ({ params }: { params: { id: string } }) => {
  const name = "しまぶ―";
  const description = "しまぶ―の説明";
  const image = "/assets/dummyImage_200_300.png";

  return ( 
    <div>
      <ChefDetailsInfo name={name} description={description} image={image} numFollowers={100} numRecipes={100} />
      ChefDetailPage: {params.id}
    </div>
  );
};
export default ChefDetailPage;
