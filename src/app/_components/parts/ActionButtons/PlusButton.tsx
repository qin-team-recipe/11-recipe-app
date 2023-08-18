'use client';

import { FC } from 'react';

import { IconPlus } from '@tabler/icons-react';

type Props = {
  onClick?: () => void;
};

export const PlusButton: FC<Props> = ({ onClick = () => {} }) => {
  return (
    <button onClick={onClick} type="button" className="text-mauve-12">
      <IconPlus size={12.92} />
    </button>
  );
};
