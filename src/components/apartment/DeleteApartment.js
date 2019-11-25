import React from 'react';
import Modal from '../../Modal';
import history from '../../history';

const DeleteApartment = () => {
  const onDismiss = () => {
    console.log('heyheyhye');
    history.goBack();
  };

  const actions = (
    <>
      <button>Delete</button>
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
