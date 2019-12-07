import React, { useContext } from 'react';
import Modal from '../../layout/Modal';
import history from '../../../history';
import { UserStore } from '../../../contexts/UserStore';

const DeleteUser = ({ match }) => {
  const id = match.params.id;
  const onDismiss = () => history.goBack();

  const { store } = useContext(UserStore);
  const onDelete = id => store.destroy(id);

  const actions = (
    <>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onDismiss()}>Cancel</button>
    </>
  );

  return (
    <Modal
      title="Delete User"
      content="Are you sure you want to delete this user?"
      actions={actions}
      onDismiss={onDismiss}
    />
  );
};

export default DeleteUser;
