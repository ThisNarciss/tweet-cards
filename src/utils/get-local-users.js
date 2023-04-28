export function getLocalUsers() {
  return JSON.parse(localStorage.getItem('users'));
}
