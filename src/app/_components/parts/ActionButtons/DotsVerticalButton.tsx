'use client';

import { FC } from 'react';

import { IconDotsVertical } from '@tabler/icons-react';

type Props = {
  onClick?: () => void;
};

export const DotsVerticalButton: FC<Props> = ({ onClick = () => {} }) => {
  return (
    <button onClick={onClick} type="button" className='text-mauve-11'>
      <IconDotsVertical size={20} />
    </button>
  );
};
