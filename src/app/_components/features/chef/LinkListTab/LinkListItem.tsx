import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

import { Link as LinkType } from '@/app/_types/Chef';

type Props = Pick<LinkType, 'siteName' | 'siteType' | 'url' | 'accountName'>;

export const LinkListItem: FC<Props> = ({ siteName, siteType, url, accountName = '@shimabu' }) => {
  // TODO: 他のアイコンも追加
  const iconUrl =
    siteType === 'TWITTER'
      ? '/assets/icons/TwitterIcon.svg'
      : siteType === 'INSTAGRAM'
      ? '/assets/icons/TwitterIcon.svg'
      : '/assets/icons/SiteIcon.svg';

  return (
    <li>
      <Link href={url} target="_blank" className="flex items-center justify-between gap-4 border-b border-mauve-7 p-4">
        <Image src={iconUrl} alt={siteType} width={16} height={16} className="as h-14 w-14 flex-shrink-0 rounded-2xl" />
        <div className="flex flex-1 flex-col gap-2 leading-none">
          <h3 className="">{siteName}</h3>
          {accountName && <p className="text-sm text-mauve-10">{accountName}</p>}
        </div>
        <div className="flex-shrink-0 text-mauve-11">
          <IconExternalLink size={20} />
        </div>
      </Link>
    </li>
  );
};
