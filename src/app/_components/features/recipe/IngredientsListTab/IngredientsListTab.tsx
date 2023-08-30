import { FC } from 'react';

import { CopyButton } from '@/app/_components/parts/ActionButtons/CopyButton';
import { RecipeIngredient } from '@/app/_types/Recipe';

import { AddToCartButton } from './AddToCartButton';
import { DeleteFromCartButton } from './DeleteFromCartButton';

type Props = {
  ingredients: (RecipeIngredient & { inShoppingList: boolean })[];
};

export const IngredientsListTab: FC<Props> = ({ ingredients }) => {
  if (!ingredients) return <div>材料が見つかりませんでした</div>;

  return (
    <div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="flex items-center gap-x-2 border-b border-mauve-7 px-4 py-2">
            <p className="flex-1 text-xs">{ingredient.text}</p>
            {!ingredient.inShoppingList ? (
              <DeleteFromCartButton id={ingredient.id} />
            ) : (
              <AddToCartButton id={ingredient.id} />
            )}
          </li>
        ))}
      </ul>
      <CopyButton text="TODO" />
    </div>
  );
};
