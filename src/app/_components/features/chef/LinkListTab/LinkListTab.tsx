import { FC } from 'react';

import { Chef } from '@/app/_types';

import { LinkListItem } from './LinkListItem';

type Props = {
  links: Chef['links'];
};

export const LinkListTab: FC<Props> = ({ links }) => {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <LinkListItem key={link.id} siteName={link.siteName} siteType={link.siteType} url={link.url} />
        ))}
      </ul>
    </div>
  );
};
