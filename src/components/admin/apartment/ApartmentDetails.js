import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { ApartmentStore } from '../../contexts/ApartmentStore';

const ApartmentDetails = ({ apartment }) => {
  //const { store } = useContext(ApartmentStore);

  return (
    <li>
      <div className="name">{apartment.name}</div>
      <div className="id">{apartment._id}</div>
      <div>
        <Link to={`/delete/${apartment._id}`} className="ui tiny icon button">
          <i aria-hidden="true" className="times icon" />
        </Link>
      </div>
    </li>
  );
};

export default ApartmentDetails;
