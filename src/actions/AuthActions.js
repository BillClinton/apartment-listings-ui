import API from '../apis/API';
import history from '../history';

import { LOGIN, LOGOUT, LOGIN_FAIL } from './types';

export const doLogin = (formValues, dispatch) => {
  const sendData = async () =>
    await API.post('/users/login', { ...formValues });

  sendData()
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data
      });
      history.push('/admin');
    })
    .catch(e => {
      dispatch({
        type: LOGIN_FAIL,
        payload: e
      });
      console.log(e);
    });
};

export const doLogout = (authHeader, dispatch) => {
  const getData = async () => await API.post('/users/logout', {}, authHeader);

  getData().then(response => {
    dispatch({
      type: LOGOUT,
      payload: response.data
    });
  });
};
