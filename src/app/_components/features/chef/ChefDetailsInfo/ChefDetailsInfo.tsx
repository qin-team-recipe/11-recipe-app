'use client'

import { FC } from 'react';

import { CommonDetailsInfo } from '@/app/_components/parts/CommonDetailsInfo';
import { FollowLikeButton } from '@/app/_components/parts/FollowLikeButton';

type Props = {
  name: string;
  description: string;
  image: string;
  numRecipes: number;
  numFollowers: number;
};

export const ChefDetailsInfo: FC<Props> = ({ name, description, image, numFollowers, numRecipes }) => {
  return (
    <div className="pb-5">
      <CommonDetailsInfo title={name} description={description} image={image}>
        <div className="flex items-center gap-x-4">
          <span>{numRecipes}レシピ</span>
          <span>{numFollowers}フォロワー</span>
        </div>
        <FollowLikeButton type="follow" initialState={false} onAdd={() => {}} onDelete={() => {}} />
      </CommonDetailsInfo>
    </div>
  );
};
