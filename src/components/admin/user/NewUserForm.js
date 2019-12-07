import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import { UserStore } from '../../../contexts/UserStore';
import TextInput from '../../form/TextInput';
import PasswordInput from '../../form/PasswordInput';
import history from '../../../history';
import '../../form/form.scss';

const NewUserForm = () => {
  const form = useForm();
  const { store } = useContext(UserStore);

  const onCancel = () => history.push('/admin/users');
  const validateConfirmEmail = val => val === form.getValues().password;
  const onSubmit = (data, e) => {
    e.preventDefault();
    store.create(data);
  };

  return (
    <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
      <h1>Add a new user</h1>
      <TextInput
        form={form}
        fieldName="name"
        label="Name"
        validations={{
          required: 'First Name is required.'
        }}
      />

      <TextInput
        form={form}
        fieldName="surname"
        label="Last Name"
        validations={{
          required: 'Last Name is required.'
        }}
      />

      <TextInput
        form={form}
        fieldName="email"
        label="Email"
        validations={{
          required: 'Email is required.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Must be a valid email address'
          }
        }}
      />

      <PasswordInput
        form={form}
        fieldName="password"
        label="Password"
        validations={{
          required: 'Password is required.',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        }}
      />

      <PasswordInput
        form={form}
        fieldName="confirm"
        label="Confirm Password"
        validations={{
          required: 'Password confirmation is required.',
          validate: {
            confirm: validateConfirmEmail
          }
        }}
      />

      <div className="buttons">
        <button className="submit">Submit</button>
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewUserForm;
