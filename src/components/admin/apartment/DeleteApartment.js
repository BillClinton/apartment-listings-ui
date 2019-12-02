import React, { useContext } from 'react';
import Modal from '../../layout/Modal';
import history from '../../../history';
import { ApartmentStore } from '../../../contexts/ApartmentStore';

const DeleteApartment = ({ match }) => {
  const id = match.params.id;
  const onDismiss = () => history.goBack();

  const { store } = useContext(ApartmentStore);
  const onDelete = id => store.destroy(id);

  const actions = (
    <>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onDismiss()}>Cancel</button>
    </>
  );

  return (
    <Modal
      title="Delete Apartment"
      content="Are you sure you want to delete this apartment?"
      actions={actions}
      onDismiss={onDismiss}
    />
  );
};

export default DeleteApartment;
