'use client';

import { FC } from 'react';

import { IconDotsCircleHorizontal } from '@tabler/icons-react';

type Props = {
  onClick?: () => void;
};

export const DotsCircleHorizontalButton: FC<Props> = ({ onClick = () => {} }) => {
  return (
    <button onClick={onClick} type="button" className='text-mauve-12'>
      <IconDotsCircleHorizontal size={16.25} />
    </button>
  );
};
