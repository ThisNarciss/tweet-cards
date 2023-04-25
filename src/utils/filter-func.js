export const filterUsers = (filter, users) => {
  switch (filter) {
    case 'follow':
      return users.filter(({ following }) => !following);
    case 'following':
      return users.filter(({ following }) => following);

    default:
      return users;
  }
};
