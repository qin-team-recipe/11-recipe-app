import { Follow, Link, Recipe, User } from '@/app/_types/Backend';

export type Role = 'USER' | 'CHEF';

export type Chef = {
  id: string;
  user?: User;
  userId?: string;
  role: Role;
  name: string;
  profile?: string;
  imageUrl?: string;
  links: Link[];
  follows: Follow[];
  recipes: Recipe[];
};
