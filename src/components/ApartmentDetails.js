import React, { useContext } from 'react';
//import { ApartmentContext } from '../contexts/ApartmentContext';

const ApartmentDetails = ({ apartment }) => {
  return (
    <li>
      <div className="title">{apartment.title}</div>
      <div className="author">{apartment.author}</div>
    </li>
  );
};

export default ApartmentDetails;
