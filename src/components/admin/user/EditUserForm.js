import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import TextInput from '../../form/TextInput';
import { UserStore } from '../../../contexts/UserStore';

const EditUserForm = ({ user }) => {
  const form = useForm({ defaultValues: user });
  const { store } = useContext(UserStore);
  const onSubmit = data => store.update(user._id, data);

  console.log(user);

  return user ? (
    <form onSubmit={form.handleSubmit(onSubmit)}>
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

      <input type="submit" />
    </form>
  ) : (
    <div>Loading....</div>
  );
};

export default EditUserForm;
