import React from 'react';
import ErrorMessage from './ErrorMessage';

const PasswordInput = ({ form, fieldName, label, validations = {} }) => {
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>

      <div>
        <input
          name={fieldName}
          type="password"
          autoComplete="new-password"
          ref={form.register(validations)}
        />
        <ErrorMessage errors={form.errors} fieldName={fieldName} />
        {form.errors[fieldName] &&
          form.errors[fieldName].type === 'confirm' && (
            <ErrorMessage
              errors={form.errors}
              fieldName={fieldName}
              message="Password confirmation must match."
            />
          )}
      </div>
    </>
  );
};

export default PasswordInput;
