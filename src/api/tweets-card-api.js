import axios from 'axios';

axios.defaults.baseURL = 'https://6442397876540ce22586f7fa.mockapi.io/api/v1';

export function getUsersData(start = 0, end = 3, signal) {
  return axios
    .get('/users', {
      signal: signal,
    })
    .then(response => {
      localStorage.setItem('users', JSON.stringify(response.data));
      response.data.map(({ user }) =>
        localStorage.setItem(
          `${user}`,
          JSON.stringify(JSON.parse(localStorage.getItem(`${user}`)) ?? false)
        )
      );
      return JSON.parse(localStorage.getItem('users')).slice(start, end);
    });
}

export function updateUsersData(id, data) {
  return axios.put(`/users/${id}`, data).then(response => {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = response.data;
    const findIdx = users.findIndex(({ id }) => id === user.id);
    users.splice(findIdx, 1, user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  });
}
