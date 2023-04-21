import axios from 'axios';

axios.defaults.baseURL = 'https://6442397876540ce22586f7fa.mockapi.io/api/v1';

export function getUsersData() {
  return axios
    .get('/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

export function updateUsersData(id) {
  return axios
    .put(`/users/:${id}`)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
