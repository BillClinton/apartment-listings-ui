import React, { useContext } from 'react';
import { ApartmentStore } from '../../contexts/ApartmentStore';

const ApartmentDetails = ({ apartment }) => {
  const { store } = useContext(ApartmentStore);

  return (
    <li onClick={() => store.destroy(apartment._id)}>
      <div className="name">{apartment.name}</div>
      <div className="id">{apartment._id}</div>
    </li>
  );
};

export default ApartmentDetails;
