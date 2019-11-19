import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import { ApartmentStore } from '../../contexts/ApartmentStore';
import TextInput from '../form/TextInput';

const ApartmentForm = () => {
  const { store } = useContext(ApartmentStore);
  const form = useForm(); // initialise the hook

  const onSubmit = data => {
    console.log(data);
    store.create(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <TextInput
        form={form}
        fieldName="name"
        label="Name"
        validations={{ required: true }}
      />

      <TextInput
        form={form}
        fieldName="address"
        label="Address"
        validations={{ required: true }}
      />

      <TextInput
        form={form}
        fieldName="rent"
        label="Rent"
        validations={{ required: true }}
      />

      <TextInput
        form={form}
        fieldName="bedrooms"
        label="Bedrooms"
        validations={{ required: true }}
      />

      <TextInput
        form={form}
        fieldName="bathrooms"
        label="Bathrooms"
        validations={{ required: true }}
      />

      <input type="submit" />
    </form>
  );
};

export default ApartmentForm;
