import API from '../apis/API';

import { READ_APARTMENTS } from './types';

export const readApartments = dispatch => {
  const getData = async () => await API.get('/apartments');

  getData().then(response => {
    dispatch({
      type: READ_APARTMENTS,
      payload: response.data
    });
  });
};
