export const changeFollowersCountStyle = newFollowers => {
  const followers = newFollowers.toString().split('');
  if (followers.length > 3) {
    followers.splice(followers.length - 3, 0, ',');
    return followers.join('');
  }
  return followers.join('');
};
