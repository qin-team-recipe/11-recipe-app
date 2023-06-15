import { FC } from 'react';

import { IconProps } from './props';

export const CartIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.05005 2.04999H4.05005L6.71005 14.47C6.80763 14.9248 7.06072 15.3315 7.42576 15.6198C7.7908 15.9082 8.24495 16.0603 8.71005 16.05H18.49C18.9452 16.0493 19.3865 15.8933 19.7411 15.6078C20.0956 15.3224 20.3422 14.9245 20.4401 14.48L22.09 7.04999H5.12005"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
