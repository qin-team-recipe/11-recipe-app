import { Chef, User } from '@/app/_types/Backend';


export type Follow = {
  chefId: string;
  chef: Chef;
  userId: string;
  user: User;
};
