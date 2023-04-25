export function statusFilter(state, action) {
  switch (action.type) {
    case 'all':
      return (state = 'all');
    case 'follow':
      return (state = 'follow');
    case 'following':
      return (state = 'following');

    default:
      return;
  }
}
