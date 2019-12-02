import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EditIcon } from '../../icons/edit-solid.svg';
import { ReactComponent as DeleteIcon } from '../../icons/minus-circle-solid.svg';

const UserDetails = ({ user }) => {
  return (
    <li>
      <div>{user.name}</div>
      <div>{user.surname}</div>
      <div>{user.email}</div>
      <div>
        <Link to={`/admin/users/edit/${user._id}`}>
          <EditIcon />
        </Link>
        <Link to={`/admin/users/delete/${user._id}`}>
          <DeleteIcon />
        </Link>
      </div>
    </li>
  );
};

export default UserDetails;
