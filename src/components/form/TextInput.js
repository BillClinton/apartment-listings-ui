import React from 'react';

const TextInput = ({ form, fieldName, label, validations = {} }) => {
  return (
    <p className={`input-${fieldName}`}>
      <label htmlFor={fieldName}>{label}</label>
      <input name={fieldName} ref={form.register(validations)} />
      {form.errors.name && `${label} is required.`}
    </p>
  );
};

export default TextInput;
