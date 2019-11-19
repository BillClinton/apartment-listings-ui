import React, { createContext, useReducer, useEffect } from 'react';
import ApartmentReducer from '../reducers/ApartmentReducer';
import { readApartments } from '../actions/ApartmentActions';

export const ApartmentStore = createContext();

const initialState = {
  apartments: []
};

const ApartmentStoreProvider = props => {
  const [state, dispatch] = useReducer(ApartmentReducer, initialState);
  const loadData = () => readApartments(dispatch);

  useEffect(loadData, []);

  const store = {
    data: state.apartments,
    loadData
  };

  return (
    <ApartmentStore.Provider value={{ store, dispatch }}>
      {props.children}
    </ApartmentStore.Provider>
  );
};

export default ApartmentStoreProvider;
