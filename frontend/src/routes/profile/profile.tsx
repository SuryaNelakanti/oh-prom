import React from 'react';

export const Profile = () => {
  const user = {
    id: 13,
    username: 'an',
    email: 'anon@ab.com',
  };

  return <div>{user.id}</div>;
};
