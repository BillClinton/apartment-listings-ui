import React, { useContext } from 'react';
import { ApartmentStore } from '../../../contexts/ApartmentStore';
import ApartmentDetails from './ApartmentDetails';
import NewButton from './NewButton';
import ReloadButton from './ReloadButton';
import styles from './styles/ApartmentList.module.scss';

const ApartmentList = () => {
  const { store } = useContext(ApartmentStore);
  const apartments = store.data;

  return apartments.length ? (
    <div className="apartment-list">
      <h1 className={styles.pageTitle}>
        Apartment List
        <NewButton />
      </h1>
      <ul className={styles.list}>
        <li>
          <div>Name</div>
          <div>Rent</div>
          <div>Actions</div>
        </li>
        {apartments.map(apartment => {
          return <ApartmentDetails apartment={apartment} key={apartment._id} />;
        })}
      </ul>
      <ReloadButton />
    </div>
  ) : (
    <>
      <div className="empty">No apartments found</div>
      <ReloadButton />
    </>
  );
};

export default ApartmentList;
