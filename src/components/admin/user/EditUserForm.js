import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import TextInput from '../../form/TextInput';
import { UserStore } from '../../../contexts/UserStore';
import history from '../../../history';
import '../../form/form.scss';

const EditUserForm = ({ user }) => {
  const form = useForm({ defaultValues: user });
  const { store } = useContext(UserStore);

  const onCancel = () => history.push('/admin/users');
  const onSubmit = (data, e) => {
    e.preventDefault();
    store.update(user._id, data);
  };

  return user ? (
    <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
      <h1>Edit user</h1>
      <TextInput
        form={form}
        fieldName="name"
        label="Name"
        validations={{ required: true }}
      />

      <TextInput
        form={form}
        fieldName="surname"
        label="Last Name"
        validations={{ required: true }}
      />

      <TextInput
        form={form}
        fieldName="email"
        label="Email"
        validations={{ required: true }}
      />

      <div className="buttons">
        <button className="submit">Submit</button>
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>Loading....</div>
  );
};

export default EditUserForm;
