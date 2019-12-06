import React from 'react';
import ErrorMessage from './ErrorMessage';

const TextInput = ({ form, fieldName, label, validations = {} }) => {
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <div>
        <input name={fieldName} type="text" ref={form.register(validations)} />
        <ErrorMessage errors={form.errors} fieldName={fieldName} />
      </div>
    </>
  );
};

export default TextInput;
