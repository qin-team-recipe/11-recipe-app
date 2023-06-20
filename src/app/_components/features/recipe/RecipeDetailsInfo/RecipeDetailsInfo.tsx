'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CommonDetailsInfo } from '@/app/_components/parts/CommonDetailsInfo';
import { FollowLikeButton } from '@/app/_components/parts/FollowLikeButton';

type Props = {
  name: string;
  description: string;
  image: string;
  numLikes: number;
  chefName: string;
  chefId: string;
  chefImage: string;
};

export const RecipeDetailsInfo: FC<Props> = ({ name, description, image, numLikes, chefName, chefId, chefImage }) => {
  return (
    <div className="pb-5">
      <CommonDetailsInfo title={name} description={description} image={image}>
        <div className="flex items-center gap-x-4">
          <Link href={`/chef/${chefId}`} className="flex items-center gap-x-1">
            <Image
              src={chefImage}
              alt={`${chefName}の画像`}
              width={20}
              height={20}
              className="aspect-square h-5 w-5 rounded-full"
            />
            {chefName}
          </Link>
          <span>{numLikes}お気に入り</span>
        </div>
        <FollowLikeButton type="like" initialState={false} onAdd={() => {}} onDelete={() => {}} />
      </CommonDetailsInfo>
    </div>
  );
};
