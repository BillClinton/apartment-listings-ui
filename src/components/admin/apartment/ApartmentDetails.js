import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/ApartmentDetails.module.scss';
import { ReactComponent as EditIcon } from '../../../icons/edit-solid.svg';
import { ReactComponent as DeleteIcon } from '../../../icons/minus-circle-solid.svg';

const ApartmentDetails = ({ apartment }) => {
  return (
    <li className={styles.details}>
      <div className={styles.name}>{apartment.name}</div>
      <div className={styles.rent}>{apartment.rent}</div>
      <div className={styles.actions}>
        <Link to={`/admin/apartments/edit/${apartment._id}`}>
          <EditIcon className={styles.edit} />
        </Link>
        <Link to={`/admin/apartments/delete/${apartment._id}`}>
          <DeleteIcon className={styles.delete} />
        </Link>
      </div>
    </li>
  );
};

export default ApartmentDetails;
