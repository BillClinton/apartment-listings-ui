import React, { useContext } from 'react';
import { ApartmentStore } from '../../../contexts/ApartmentStore';
import ApartmentDetails from './ApartmentDetails';
import ReloadButton from './ReloadButton';

const ApartmentList = () => {
  const { store } = useContext(ApartmentStore);
  const apartments = store.data;

  return apartments.length ? (
    <div className="apartment-list">
      <h1>Apartment List</h1>
      <ul>
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
