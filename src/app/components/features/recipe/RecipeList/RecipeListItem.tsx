import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Recipe } from '@/app/types/recipe';

type Props = {
  recipe: Recipe;
};

export const RecipeListItem: FC<Props> = ({ recipe: { image, name, description, numLikes, isPublic } }) => {
  return (
    <article>
      <Link href={`/recipes/${name}`}>
        <div className="relative">
          <Image src={image} alt={`${name}の画像`} width={200} height={200} className="aspect-square rounded-2xl" />
          {numLikes > 0 && isPublic && (
            <span className="text-white absolute right-2 top-2 flex items-center gap-x-1 rounded-full bg-[rgba(4,0,19,0.48)] px-1.5 py-2 text-sm leading-none">
              <span>♡</span>
              {numLikes}
            </span>
          )}
        </div>
        <div className="mt-2">
          <h3 className="line-clamp-2 text-xs font-bold text-[#1A1523]">{name}</h3>
          <p className="mt-1 line-clamp-1 text-[10px] text-[#6F6E77]">{description}</p>
        </div>
      </Link>
    </article>
  );
};
