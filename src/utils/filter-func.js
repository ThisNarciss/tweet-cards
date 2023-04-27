export const filterUsers = (filter, users) => {
  switch (filter) {
    case 'follow':
      return users.filter(
        ({ user }) => !JSON.parse(localStorage.getItem(`${user}`))
      );
    case 'following':
      return users.filter(({ user }) =>
        JSON.parse(localStorage.getItem(`${user}`))
      );

    default:
      return users;
  }
};
