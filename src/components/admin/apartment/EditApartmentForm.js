import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import { ApartmentStore } from '../../../contexts/ApartmentStore';
import TextInput from '../../form/TextInput';
import history from '../../../history';
import '../../form/form.scss';

const EditApartmentForm = ({ apartment }) => {
  const form = useForm({ defaultValues: apartment });
  const { store } = useContext(ApartmentStore);

  const onCancel = () => history.push('/admin/apartments');
  const onSubmit = (data, e) => {
    e.preventDefault();
    store.update(apartment._id, data);
  };

  return apartment ? (
    <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
      <h1>Edit apartment</h1>
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
  ) : (
    <div>Loading....</div>
  );
};

export default EditApartmentForm;
