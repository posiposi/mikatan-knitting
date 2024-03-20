import type { User } from './user';

export type TopBanner = {
  cartItemCount: number;
  auth: {
    user: User;
  };
};
