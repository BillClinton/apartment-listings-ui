import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../layout/Grid.module.scss';
import { ReactComponent as EditIcon } from '../../../icons/edit-solid.svg';
import { ReactComponent as DeleteIcon } from '../../../icons/minus-circle-solid.svg';

const UserDetails = ({ user }) => {
  return (
    <li className={styles.grid}>
      <div className={styles.name}>{user.name}</div>
      <div className={styles.rent}>{user.rent}</div>
      <div className={styles.actions}>
        <Link to={`/admin/users/edit/${user._id}`}>
          <EditIcon className={styles.edit} />
        </Link>
        <Link to={`/admin/users/delete/${user._id}`}>
          <DeleteIcon className={styles.delete} />
        </Link>
      </div>
    </li>
  );
};

export default UserDetails;
