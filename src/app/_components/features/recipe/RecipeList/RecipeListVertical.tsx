import { FC } from 'react';

import { dummyRecipeList } from '@/app/_data/dummyRecipe';
import { Recipe } from '@/app/_types/Recipe';

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
