import React, { createContext, useReducer, useEffect } from 'react';
import ApartmentReducer from '../reducers/ApartmentReducer';
import {
  createApartment,
  readApartment,
  readApartments,
  updateApartment,
  deleteApartment
} from '../actions/ApartmentActions';

export const ApartmentStore = createContext();

const initialState = {
  apartments: []
};

const ApartmentStoreProvider = props => {
  const [state, dispatch] = useReducer(ApartmentReducer, initialState);
  const create = data => createApartment(data, dispatch);
  const load = () => readApartments(dispatch);
  const loadOne = id => readApartment(id, dispatch);
  const update = (id, data) => updateApartment(id, data, dispatch);
  const destroy = id => deleteApartment(id, dispatch);

  useEffect(load, []);

  const store = {
    data: state.apartments,
    edit: state.apartment,
    create,
    load,
    loadOne,
    update,
    destroy
  };

  return (
    <ApartmentStore.Provider value={{ store, dispatch }}>
      {props.children}
    </ApartmentStore.Provider>
  );
};

export default ApartmentStoreProvider;
