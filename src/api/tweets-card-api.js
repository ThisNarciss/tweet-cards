import axios from 'axios';
import { setStatusInLocal } from '../utils/set-local-status';

axios.defaults.baseURL = 'https://6442397876540ce22586f7fa.mockapi.io/api/v1';

export function getUsersData(start = 0, end = 3, signal) {
  return axios
    .get('/users', {
      signal: signal,
    })
    .then(response => {
      localStorage.setItem('users', JSON.stringify(response.data));
      setStatusInLocal(response.data);
      return JSON.parse(localStorage.getItem('users')).slice(start, end);
    });
}

export function updateUsersData(id, data) {
  return axios.put(`/users/${id}`, data).then(response => response.data);
}
