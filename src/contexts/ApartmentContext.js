import React, { createContext, useState } from 'react';
//import { ApartmentReducer } from '../reducers/ApartmentReducer';

export const ApartmentContext = createContext();

const ApartmentContextProvider = props => {
  const [apartments] = useState([
    { id: 1, title: 'Apt One' },
    { id: 2, title: 'Apt Two' }
  ]);
  return (
    <ApartmentContext.Provider value={{ apartments }}>
      {props.children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentContextProvider;
