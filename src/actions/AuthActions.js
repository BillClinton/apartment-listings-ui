import API from '../apis/API';

import { LOGIN, LOGOUT } from './types';

export const doLogin = (formValues, dispatch) => {
  const sendData = async () =>
    await API.post('/users/login', { ...formValues });

  sendData()
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data
      });
    })
    .catch(e => {
      console.log(e);
    });
};

export const doLogout = dispatch => {
  const getData = async () => await API.get('/logout');

  getData().then(response => {
    dispatch({
      type: LOGOUT,
      payload: response.data
    });
  });
};
