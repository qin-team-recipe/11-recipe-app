import { FC, ReactNode } from 'react';
import Image from 'next/image';

import { BackButton } from '@/app/_components/parts/BackButton';
import { Chef, Recipe } from '@/app/_types';

type Props = {
  title: Recipe['name'] | Chef['name'];
  description: Recipe['overview'] | Chef['profile'];
  image: Recipe['recipeImages'] | Chef['imageUrl'];
  children?: ReactNode;
};

export const CommonDetailsInfo: FC<Props> = ({ title, description, image, children }) => {
  return (
    <div className="relative">
      <div className="space-y-4">
        {image && (
          <Image
            src={Array.isArray(image) ? image[0].imageUrl : image}
            alt={`${title}の画像`}
            width={500}
            height={500}
            className="aspect-square"
          />
        )}
        <div className="space-y-4 px-4">
          <h1 className="text-[28px] font-bold">{title}</h1>
          {description && <p>{description}</p>}
          {children}
        </div>
      </div>

      <div className="absolute left-5 top-5">
        <BackButton color="white" width={32} height={32} />
      </div>
    </div>
  );
};
