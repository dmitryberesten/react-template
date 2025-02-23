import React from 'react';
import friends from 'friends.json';
import FriendList from './components/example/FriendList';

export const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
};
