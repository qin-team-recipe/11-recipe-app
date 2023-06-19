'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { BackIcon } from '@/app/components/parts/BackButton/BackIcon';

type Props = {
  href?: string | null;
  width?: number;
  height?: number;
  color?: 'black' | 'white';
};

export const BackButton: FC<Props> = ({ href = null, width = 20, height = 20, color = 'black' }) => {
  const router = useRouter();
  const colorClass = color === 'black' ? 'text-mauve-12' : 'text-[#fff]';

  const Content = <BackIcon width={width} height={height} />;

  if (href) {
    return (
      <Link className={`w-[${width}px] h-[${height}px] ${colorClass}`} href={href}>
        {Content}
      </Link>
    );
  }

  return (
    <button className={`w-[${width}px] h-[${height}px] ${colorClass}`} type="button" onClick={() => router.back()}>
      {Content}
    </button>
  );
};
