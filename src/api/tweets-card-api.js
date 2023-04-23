import axios from 'axios';

axios.defaults.baseURL = 'https://6442397876540ce22586f7fa.mockapi.io/api/v1';

export function getUsersData(pagCount = 3) {
  return axios
    .get('/users')
    .then(response => response.data.slice(0, pagCount))
    .catch(error => console.log(error));
}

export function updateUsersData(id, data) {
  return axios
    .put(`/users/${id}`, data)
    .then(response => response.data)
    .catch(error => console.log(error));
}
