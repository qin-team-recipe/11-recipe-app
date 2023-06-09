import React, { FC } from 'react';

import { IconProps } from '@/app/_types/IconProps';

export const FavIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.4179 4.57825C19.9162 4.07482 19.3201 3.67539 18.6637 3.40284C18.0073 3.13029 17.3036 2.98999 16.5929 2.98999C15.8822 2.98999 15.1784 3.13029 14.5221 3.40284C13.8657 3.67539 13.2696 4.07482 12.7679 4.57825L11.9979 5.35825L11.2279 4.57825C10.7262 4.07482 10.1301 3.67539 9.47371 3.40284C8.81733 3.13029 8.11361 2.98999 7.40289 2.98999C6.69217 2.98999 5.98845 3.13029 5.33207 3.40284C4.67569 3.67539 4.07957 4.07482 3.57789 4.57825C1.45789 6.69825 1.32789 10.2782 3.99789 12.9982L11.9979 20.9982L19.9979 12.9982C22.6679 10.2782 22.5379 6.69825 20.4179 4.57825Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
