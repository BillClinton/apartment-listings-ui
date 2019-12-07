import API from '../apis/API';
import history from '../history';
import { toastError } from '../components/form/Toasts';

import {
  CREATE_USER,
  READ_USER,
  READ_USERS,
  UPDATE_USER,
  DELETE_USER
} from './types';

export const createUser = (formValues, authHeader, dispatch) => {
  const sendData = async () =>
    await API.post('/users', { ...formValues }, authHeader);

  sendData()
    .then(response => {
      dispatch({
        type: CREATE_USER,
        payload: response.data
      });
      history.push('/admin/users');
    })
    .catch(e => {
      toastError(e.response.statusText, { errors: [e.response.data.error] });
    });
};

export const readUser = (id, authHeader, dispatch) => {
  const getData = async () => await API.get(`/users/${id}`, authHeader);
  console.log('reading....');
  console.log(API.test);
  getData()
    .then(response => {
      dispatch({
        type: READ_USER,
        payload: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
      //toastError(e.response.statusText, { errors: [e.response.data.error] });
    });
};

export const readUsers = (authHeader, dispatch) => {
  console.log(authHeader);
  const getData = async () => await API.get('/users', authHeader);

  getData().then(response => {
    dispatch({
      type: READ_USERS,
      payload: response.data
    });
  });
};

export const updateUser = (id, formValues, authHeader, dispatch) => {
  const updateData = async () =>
    await API.patch(`/users/${id}`, { ...formValues }, authHeader);

  updateData()
    .then(response => {
      console.log('dispatching');
      dispatch({
        type: UPDATE_USER,
        payload: response.data
      });
      history.push('/admin/users');
    })
    .catch(e => {
      console.log(e);
      //toastError(e.response.statusText, { errors: [e.response.data.error] });
    });
};

export const deleteUser = (id, authHeader, dispatch) => {
  const deleteData = async () => await API.delete(`/users/${id}`, authHeader);

  deleteData().then(response => {
    dispatch({
      type: DELETE_USER,
      payload: id
    });
    history.goBack();
  });
};
