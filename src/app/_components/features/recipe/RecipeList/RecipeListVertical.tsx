import { FC } from 'react';

import { dummyRecipeList } from '@/app/_data/dummyRecipe';
import { Recipe as BackendRecipe } from '@/app/_types/Backend';

import { RecipeListItem } from './RecipeListItem';

type Recipe = Pick<BackendRecipe, 'id' | 'recipeImages' | 'name' | 'overview'> & { numLikes: number; isPublic: boolean };

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
