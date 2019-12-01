import React, { useContext } from 'react';
import { UserStore } from '../../../contexts/UserStore';
import UserDetails from './UserDetails';

const UserList = () => {
  const { store } = useContext(UserStore);
  const users = store.data;

  return users.length ? (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {users.map(user => {
          return <UserDetails user={user} key={user._id} />;
        })}
      </ul>
    </div>
  ) : (
    <>
      <div className="empty">No users found</div>
    </>
  );
};

export default UserList;
