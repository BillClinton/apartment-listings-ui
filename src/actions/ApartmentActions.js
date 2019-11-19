import API from '../apis/API';
import { toastError } from '../components/form/Toasts';

import { CREATE_APARTMENT, READ_APARTMENTS } from './types';

export const createApartment = (formValues, dispatch) => {
  const sendData = async () => await API.post('/apartments', { ...formValues });

  sendData()
    .then(response => {
      dispatch({
        type: CREATE_APARTMENT,
        payload: response.data
      });
    })
    .catch(e => {
      toastError(e.response.statusText, { errors: [e.response.data.error] });
    });
};

export const readApartments = dispatch => {
  const getData = async () => await API.get('/apartments');

  getData().then(response => {
    dispatch({
      type: READ_APARTMENTS,
      payload: response.data
    });
  });
};
