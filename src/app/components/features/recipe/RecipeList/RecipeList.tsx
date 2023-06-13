import { FC } from 'react';

import { dummyRecipeList } from '@/app/data/dummyRecipe';
import { Recipe } from '@/app/types/Recipe';
import { RecipeListItem } from './RecipeListItem';

type Props = {
  recipeList: Recipe[];
};

export const RecipeListVertical: FC<Props> = ({ recipeList }) => {
  const recipe = recipeList.length > 0 ? recipeList : dummyRecipeList;
  return (
    <ul className="grid grid-cols-2  gap-x-3 gap-y-4">
      {recipe.map((recipe) => (
        <li key={recipe.id} className="">
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export const RecipeListHorizontal: FC<Props> = ({ recipeList }) => {
  const recipe = recipeList.length > 0 ? recipeList : dummyRecipeList;
  return (
    <ul className="hidden-scrollbar flex gap-x-[4%] overflow-x-scroll">
      {recipe.map((recipe) => (
        <li key={recipe.id} className="w-[44%] flex-shrink-0">
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
