import React, { useContext } from 'react';
import { ApartmentStore } from '../../contexts/ApartmentStore';

const ReloadButton = () => {
  const { store } = useContext(ApartmentStore);

  return <button onClick={store.loadData}>Reload me!</button>;
};

export default ReloadButton;
