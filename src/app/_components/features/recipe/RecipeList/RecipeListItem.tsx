import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Recipe } from '@/app/_types/Backend';

type Props = {
  recipe: Pick<Recipe, 'id' | 'recipeImages' | 'name' | 'overview'> & { numLikes: number; isPublic: boolean };
};

export const RecipeListItem: FC<Props> = ({ recipe: { id, recipeImages, name, overview, numLikes, isPublic } }) => {
  return (
    <article>
      <Link href={`/recipe/${id}`}>
        <div className="relative aspect-square">
          {recipeImages && (
            <Image src={recipeImages[0].imageUrl} alt={`${name}の画像`} fill className="rounded-2xl object-cover" />
          )}
          {numLikes > 0 && isPublic && (
            <span className="absolute right-2 top-2 flex items-center gap-x-1 rounded-full bg-[rgba(4,0,19,0.48)] px-1.5 py-2 text-sm leading-none text-[#fff]">
              <span>♡</span>
              {numLikes}
            </span>
          )}
        </div>
        <div className="mt-2">
          <h3 className="line-clamp-2 text-xs font-bold text-[#1A1523]">{name}</h3>
          <p className="mt-1 line-clamp-1 text-[10px] text-[#6F6E77]">{overview}</p>
        </div>
      </Link>
    </article>
  );
};
