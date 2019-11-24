import React from 'react';
import Modal from '../../Modal';
import history from '../../history';

const DeleteApartment = () => {
  console.log('Delete Apartment');
  const content = 'Are you sure you want to delete this apartment?';
  const onDismiss = () => {
    history.goBack();
  };
  const actions = (
    <React.Fragment>
      <button>Delete</button>
      <button onClick={() => onDismiss()} className="ui button">
        Cancel
      </button>
    </React.Fragment>
  );

  return (
    <Modal
      title="Delete Apartment"
      content={content}
      actions={actions}
      onDismiss={onDismiss}
    />
  );
};

export default DeleteApartment;
