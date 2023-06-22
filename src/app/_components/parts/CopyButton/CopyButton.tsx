'use client';

import { FC } from 'react';

import { IconCopy } from '@tabler/icons-react';

type Props = {
  text: string;
};

export const CopyButton: FC<Props> = ({ text }) => {
  const handleCopy = () => {
    console.log(text);
  };
  return (
    <div className="px-4 py-2 text-right">
      <button type="button" onClick={handleCopy} className="inline-flex items-center gap-x-0.5 text-blue-11 text-xs">
        <IconCopy className="h-4 w-4" />
        コピーする
      </button>
    </div>
  );
};
