import { FC } from 'react';

import { RecipeListVertical } from '@/app/_components/features/recipe/RecipeList';
import { Recipe } from '@/app/_types';

type Props = {
  recipeList: Recipe[];
};

export const RecipeListTab: FC<Props> = ({ recipeList }) => {
  return (
    <div className='py-5 px-4'>
      <RecipeListVertical recipeList={recipeList} />
    </div>
  );
};
