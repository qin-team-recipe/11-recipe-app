import { Recipe } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  recipe: Recipe;
};

export const RecipeListItem: FC<Props> = ({
  recipe: { image, name, description, numLikes, isPublic },
}) => {
  return (
    <article>
      <Link href={`/recipes/${name}`}>
        <div className="relative">
          <Image
            src={image}
            alt={`${name}の画像`}
            width={200}
            height={200}
            className="aspect-square rounded-2xl"
          />
          {numLikes > 0 && isPublic && (
            <span className="absolute top-2 right-2 text-white text-sm px-1.5 py-2 flex items-center gap-x-1 leading-none rounded-full bg-[rgba(4,0,19,0.48)]">
              <span>♡</span>
              {numLikes}
            </span>
          )}
        </div>
        <div className="mt-2">
          <h3 className="text-xs font-bold text-[#1A1523] line-clamp-2">
            {name}
          </h3>
          <p className="text-[10px] mt-1 text-[#6F6E77] line-clamp-1">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};
