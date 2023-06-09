import { RecipeListItem } from './RecipeListItem';
import { dummyRecipeList } from '../dummyData';
import { Recipe } from '../types';
import { FC } from 'react';

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
    <ul className="flex gap-x-[4%] overflow-x-scroll hidden-scrollbar">
      {recipe.map((recipe) => (
        <li key={recipe.id} className="w-[44%] flex-shrink-0">
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
