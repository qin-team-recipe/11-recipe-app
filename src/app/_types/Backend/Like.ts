import { Chef, User } from '@/app/_types/Backend';

export type Like = {
  chefId: string;
  chef: Chef;
  userId: string;
  user: User;
};
