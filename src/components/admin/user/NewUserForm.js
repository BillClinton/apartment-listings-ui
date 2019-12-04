import React, { useContext } from 'react';
import { UserStore } from '../../../contexts/UserStore';
import useForm from 'react-hook-form';
import TextInput from '../../form/TextInput';
import PasswordInput from '../../form/PasswordInput';
import '../../form/form.scss';

const NewUserForm = ({ user }) => {
  const form = useForm({ defaultValues: user });
  const { store } = useContext(UserStore);
  const onSubmit = data => store.create(data);

  const validateConfirmEmail = val => val === form.getValues().password;

  return (
    <form className="ui form" onSubmit={form.handleSubmit(onSubmit)}>
      <ul>
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

        <li>
          <input type="submit" />
        </li>
      </ul>
    </form>
  );
};

export default NewUserForm;
