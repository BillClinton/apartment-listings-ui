import React from 'react';
import useForm from 'react-hook-form';
import TextInput from '../form/TextInput';

const ApartmentForm = () => {
  const form = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
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
        fieldName="rent"
        label="Rent"
        validations={{ required: true }}
      />

      <input type="submit" />
    </form>
  );
};

export default ApartmentForm;
