import { Chef } from '@/app/_types/Backend';

type SiteType = 'TWITTER' | 'INSTAGRAM' | 'FACEBOOK' | 'YOUTUBE' | 'TIKTOK' | 'BLOG' | 'OTHER';

export type Link = {
  id: string;
  siteType: SiteType;
  chef: Chef;
  chefId: string;
  siteName: string;
  url: string;
  accountName?: string;
};
