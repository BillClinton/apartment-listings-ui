import React from 'react';

const ApartmentDetails = ({ apartment }) => {
  return (
    <li>
      <div className="name">{apartment.name}</div>
      <div className="id">{apartment._id}</div>
    </li>
  );
};

export default ApartmentDetails;
