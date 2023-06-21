import { FC } from 'react';

import { dummyRecipeList } from '@/app/_data/dummyRecipe';
import { Recipe } from '@/app/_types/Recipe';

import { RecipeListItem } from './RecipeListItem';

type Props = {
  recipeList: Recipe[];
};

export const RecipeListHorizontal: FC<Props> = ({ recipeList }) => {
  const recipe = recipeList.length > 0 ? recipeList : dummyRecipeList;
  return (
    <ul className="hidden-scrollbar flex gap-x-4 overflow-x-scroll">
      {recipe.map((recipe) => (
        <li key={recipe.id} className="w-40 flex-shrink-0">
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
