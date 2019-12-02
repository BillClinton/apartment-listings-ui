import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/NewButton.module.scss';
import { ReactComponent as AddIcon } from '../../icons/plus-solid.svg';

const NewButton = () => {
  return (
    <>
      <Link className={styles.linkPC} to="/admin/apartments/new">
        New
      </Link>
      <Link className={styles.linkMobile} to="/admin/apartments/new">
        <AddIcon />
      </Link>
    </>
  );
};

export default NewButton;
