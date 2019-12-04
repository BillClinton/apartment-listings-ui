import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import TextInput from '../../form/TextInput';
import { ApartmentStore } from '../../../contexts/ApartmentStore';

const NewApartmentForm = () => {
  const form = useForm();
  const { store } = useContext(ApartmentStore);
  const onSubmit = data => store.create(data);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} autocomplete="on">
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

export default NewApartmentForm;
