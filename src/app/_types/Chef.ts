import { Recipe } from '@/app/_types';

type Role = 'USER' | 'CHEF';

type SiteType = 'TWITTER' | 'INSTAGRAM' | 'FACEBOOK' | 'YOUTUBE' | 'TIKTOK' | 'BLOG' | 'OTHER';

type Link = {
  id: string;
  siteType: SiteType;
  // chef: Chef;
  chefId: string;
  siteName: string;
  url: string;
  accountName?: string;
};

export type Chef = {
  id: string;
  // user?: User;
  userId?: string;
  role: Role;
  name: string;
  profile?: string;
  imageUrl?: string;
  links: Link[];
  // follows: Follow[];
  recipes: Recipe[];
} & {
  numFollows: number; // FE only
  numRecipes: number; // FE only
};
