import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthContext';
import TextInput from '../../form/TextInput';
import PasswordInput from '../../form/PasswordInput';
import ErrorMessage from '../../form/ErrorMessage';
import '../../form/form.scss';
import UserInfo from '../../UserInfo';

const LoginForm = () => {
  const form = useForm();
  const { auth } = useContext(AuthContext);

  const onSubmit = (data, e) => {
    e.preventDefault();
    auth.login(data);
  };

  return auth.loggedIn ? (
    <Redirect to="/admin" />
  ) : (
    <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
      <UserInfo />
      <h1>Login</h1>
      {auth.loginFail && (
        <p className="form-error">
          <ErrorMessage message="Invalid username/password combination" />
        </p>
      )}
      <TextInput
        form={form}
        fieldName="email"
        label="Email"
        validations={{
          required: 'Email is required.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Must be a valid email address'
          }
        }}
      />

      <PasswordInput
        form={form}
        fieldName="password"
        label="Password"
        validations={{
          required: 'Password is required.'
        }}
      />

      <div className="buttons">
        <button className="Login">Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
