import React, { useContext } from 'react';
import { ApartmentStore } from '../../../contexts/ApartmentStore';
import EditApartmentForm from './EditApartmentForm';

const EditApartment = ({ match }) => {
  const { store } = useContext(ApartmentStore);
  const id = match.params.id;
  let apartment = store.edit;

  if (!apartment || apartment._id !== id) {
    apartment = null;
    store.loadOne(id);
  }

  return apartment ? (
    <EditApartmentForm apartment={apartment} />
  ) : (
    <div>loading form...</div>
  );
};

export default EditApartment;
