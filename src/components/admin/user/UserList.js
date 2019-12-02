import React, { useContext } from 'react';
import { UserStore } from '../../../contexts/UserStore';
import UserDetails from './UserDetails';
import NewButton from './NewButton';
import styles from './styles/UserList.module.scss';

const UserList = () => {
  const { store } = useContext(UserStore);
  const users = store.data;

  return (
    <div className="user-list">
      <h1 className={styles.pageTitle}>
        User List
        <NewButton />
      </h1>
      <ul className={styles.list}>
        <li>
          <div>Name</div>
          <div>Surname</div>
          <div>Email</div>
          <div>Actions</div>
        </li>
        {users.length ? (
          users.map(user => {
            return <UserDetails user={user} key={user._id} />;
          })
        ) : (
          <div className={styles.loading}>loading</div>
        )}
      </ul>
    </div>
  );
};

export default UserList;
