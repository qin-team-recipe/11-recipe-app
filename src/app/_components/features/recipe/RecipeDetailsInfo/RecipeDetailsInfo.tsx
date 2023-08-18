'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FollowLikeButton } from '@/app/_components/parts/ActionButtons/FollowLikeButton';
import { CommonDetailsInfo } from '@/app/_components/parts/CommonDetailsInfo';
import { Recipe } from '@/app/_types';

type Props = Pick<Recipe, 'name' | 'overview' | 'recipeImages' | 'chef' | 'numLikes'>;

export const RecipeDetailsInfo: FC<Props> = ({ name, overview, recipeImages, numLikes, chef }) => {
  return (
    <div className="pb-5">
      <CommonDetailsInfo title={name} description={overview} image={recipeImages}>
        <div className="flex items-center gap-x-4">
          <Link href={`/chef/${chef.id}`} className="flex items-center gap-x-1">
            {chef.imageUrl && (
              <Image
                src={chef.imageUrl}
                alt={`${chef.name}の画像`}
                width={20}
                height={20}
                className="aspect-square h-5 w-5 rounded-full"
              />
            )}
            {chef.name}
          </Link>
          <span>{numLikes}お気に入り</span>
        </div>
        <FollowLikeButton type="like" initialState={false} onAdd={() => {}} onDelete={() => {}} />
      </CommonDetailsInfo>
    </div>
  );
};
