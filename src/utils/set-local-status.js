export function setStatusInLocal(data) {
  const users = data.map(({ id }) => ({
    id,
    follow:
      JSON.parse(localStorage.getItem('usersStatus'))?.find(
        user => id === user.id
      )?.follow ?? false,
  }));
  localStorage.setItem('usersStatus', JSON.stringify(users));
}

export function setNewStatus(userId, bool) {
  const users = JSON.parse(localStorage.getItem('usersStatus'));
  const fidIdx = users.findIndex(({ id }) => userId === id);
  users.splice(fidIdx, 1, { id: userId, follow: bool });
  localStorage.setItem('usersStatus', JSON.stringify(users));
}

export function getUserStatus(id) {
  return JSON.parse(localStorage.getItem('usersStatus')).find(
    user => user.id === id
  ).follow;
}
