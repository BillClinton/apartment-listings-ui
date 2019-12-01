import API from '../apis/API';
import history from '../history';
import { toastError } from '../components/form/Toasts';

import {
  CREATE_APARTMENT,
  READ_APARTMENT,
  READ_APARTMENTS,
  UPDATE_APARTMENT,
  DELETE_APARTMENT
} from './types';

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

export const readApartment = (id, dispatch) => {
  const getData = async () => await API.get(`/apartments/${id}`);
  getData()
    .then(response => {
      dispatch({
        type: READ_APARTMENT,
        payload: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
      //toastError(e.response.statusText, { errors: [e.response.data.error] });
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

export const updateApartment = (id, formValues, dispatch) => {
  const updateData = async () =>
    await API.patch(`/apartments/${id}`, { ...formValues });

  updateData()
    .then(response => {
      dispatch({
        type: UPDATE_APARTMENT,
        payload: response.data
      });
      history.push('/admin/apartments');
    })
    .catch(e => {
      console.log(e);
      //toastError(e.response.statusText, { errors: [e.response.data.error] });
    });
};

export const deleteApartment = (id, dispatch) => {
  const deleteData = async () => await API.delete(`/apartments/${id}`);

  deleteData().then(response => {
    dispatch({
      type: DELETE_APARTMENT,
      payload: id
    });
    history.goBack();
  });
};
