'use client';

import { FC } from 'react';

import { IconCopy } from '@tabler/icons-react';

type Props = {
  text: string;
};

export const CopyButton: FC<Props> = ({ text }) => {
  const copyToClipboard = (tagValue: string) => {
    if (!navigator.clipboard) {
      // TODO 非対応時の対応
      console.log('not supported');
      return;
    }

    return navigator.clipboard.writeText(tagValue).then(function () {
      // TODO 完了メッセージを表示する？
      console.log('done');
    });
  };

  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <div className="px-4 py-2 text-right">
      <button type="button" onClick={handleCopy} className="inline-flex items-center gap-x-0.5 text-xs text-blue-11">
        <IconCopy className="h-4 w-4" />
        コピーする
      </button>
    </div>
  );
};
