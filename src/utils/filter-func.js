import { getUserStatus } from './set-local-status';

export const filterUsers = (filter, users) => {
  switch (filter) {
    case 'follow':
      return users.filter(({ id }) => !getUserStatus(id));

    case 'following':
      return users.filter(({ id }) => getUserStatus(id));

    default:
      return users;
  }
};
