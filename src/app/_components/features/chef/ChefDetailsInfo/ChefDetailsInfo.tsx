'use client';

import { FC } from 'react';

import { CommonDetailsInfo } from '@/app/_components/parts/CommonDetailsInfo';
import { FollowLikeButton } from '@/app/_components/parts/FollowLikeButton';
import { Chef } from '@/app/_types/Backend';

type Props = Pick<Chef, 'name' | 'profile' | 'imageUrl'> & {
  numRecipes: number;
  numFollowers: number;
};

export const ChefDetailsInfo: FC<Props> = ({ name, profile, imageUrl, numFollowers, numRecipes }) => {
  return (
    <div className="pb-5">
      <CommonDetailsInfo title={name} description={profile} image={imageUrl}>
        <div className="flex items-center gap-x-4">
          <span>{numRecipes}レシピ</span>
          <span>{numFollowers}フォロワー</span>
        </div>
        <FollowLikeButton type="follow" initialState={false} onAdd={() => {}} onDelete={() => {}} />
      </CommonDetailsInfo>
    </div>
  );
};