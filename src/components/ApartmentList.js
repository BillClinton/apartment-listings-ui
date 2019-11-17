import React, { useContext } from 'react';
import { ApartmentContext } from '../contexts/ApartmentContext';
import ApartmentDetails from './ApartmentDetails';

const ApartmentList = () => {
  const { apartments } = useContext(ApartmentContext);
  return apartments.length ? (
    <div className="apartment-list">
      <ul>
        {apartments.map(apartment => {
          return <ApartmentDetails apartment={apartment} key={apartment.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No apartments found</div>
  );
};

export default ApartmentList;
