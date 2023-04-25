import axios from 'axios';

axios.defaults.baseURL = 'https://6442397876540ce22586f7fa.mockapi.io/api/v1';

export function getUsersData(start = 0, end = 3, signal) {
  return axios
    .get('/users', {
      signal: signal,
    })
    .then(response => response.data.slice(start, end));
}

export function updateUsersData(id, data) {
  return axios.put(`/users/${id}`, data).then(response => response.data);
}
