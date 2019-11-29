import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import TextInput from '../../form/TextInput';
import { ApartmentStore } from '../../../contexts/ApartmentStore';

const EditApartmentForm = ({ apartment }) => {
  const form = useForm({ defaultValues: apartment });
  const { store } = useContext(ApartmentStore);
  const onSubmit = data => store.update(apartment._id, data);

  console.log(apartment);

  return apartment ? (
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
  ) : (
    <div>Loading....</div>
  );
};

export default EditApartmentForm;
