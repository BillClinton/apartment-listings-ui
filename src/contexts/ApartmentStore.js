import React, { createContext, useReducer, useEffect } from 'react';
import ApartmentReducer from '../reducers/ApartmentReducer';
import {
  createApartment,
  readApartments,
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
  const update = data => createApartment(data, dispatch);
  const destroy = id => deleteApartment(id, dispatch);

  useEffect(load, []);

  const store = {
    data: state.apartments,
    create,
    load,
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
