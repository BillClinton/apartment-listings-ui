import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import { ApartmentStore } from '../../../contexts/ApartmentStore';
import TextInput from '../../form/TextInput';
import history from '../../../history';
import '../../form/form.scss';

const NewApartmentForm = () => {
  const form = useForm();
  const { store } = useContext(ApartmentStore);

  const onCancel = () => history.push('/admin/apartments');
  const onSubmit = (data, e) => {
    e.preventDefault();
    store.create(data);
  };

  return (
    <form
      className="form"
      onSubmit={form.handleSubmit(onSubmit)}
      autocomplete="on"
    >
      <h1>Add a new apartment</h1>
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

      <div className="buttons">
        <button className="submit">Submit</button>
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewApartmentForm;
