import React, { createContext, useReducer, useEffect } from 'react';
import ApartmentReducer from '../reducers/ApartmentReducer';
import { createApartment, readApartments } from '../actions/ApartmentActions';

export const ApartmentStore = createContext();

const initialState = {
  apartments: []
};

const ApartmentStoreProvider = props => {
  const [state, dispatch] = useReducer(ApartmentReducer, initialState);
  const load = () => readApartments(dispatch);
  const create = data => createApartment(data, dispatch);

  useEffect(load, []);

  const store = {
    data: state.apartments,
    load,
    create
  };

  return (
    <ApartmentStore.Provider value={{ store, dispatch }}>
      {props.children}
    </ApartmentStore.Provider>
  );
};

export default ApartmentStoreProvider;
