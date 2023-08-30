import { FC } from 'react';

import { IconProps } from '@/app/_types/IconProps';

export const BackIcon: FC<IconProps> = ({ width = 32, height = 32 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.3334 16H6.66669" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 25.3333L6.66669 16L16 6.66666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
