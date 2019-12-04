import React from 'react';

const ErrorMessage = ({ errors, fieldName, message }) => {
  if (errors[fieldName] && errors[fieldName].message) {
    message = errors[fieldName].message;
  }
  return message ? (
    <p>
      <i className="icon" aria-hidden="true"></i>
      {message}
    </p>
  ) : (
    ''
  );
};

export default ErrorMessage;
