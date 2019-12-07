import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminHeader.module.scss';
import { ReactComponent as BarsIcon } from '../icons/bars-solid.svg';
import { ReactComponent as CloseIcon } from '../icons/times-circle-solid.svg';

const AdminHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleClass = [styles.menuToggle];
  if (isMenuOpen) {
    toggleClass.push(styles.menuToggleActive);
  }

  return (
    <header className={styles.header}>
      <div className={styles.innerwrap}>
        <div className={styles.brand}>
          <h1>Site Title</h1>
        </div>

        <nav className={isMenuOpen ? styles.navActive : ''}>
          <Link to="/">Home</Link>
          <Link to="/admin/apartments">Apartments</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/logout">Logout</Link>
        </nav>
        <div
          className={toggleClass.join(' ')}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BarsIcon className={styles.menuOpen} />
          <CloseIcon className={styles.menuClose} />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
