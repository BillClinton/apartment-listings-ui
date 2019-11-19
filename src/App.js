import React from 'react';
import ApartmentStoreProvider from './contexts/ApartmentStore';
import ApartmentList from './components/apartment/ApartmentList';
import ApartmentForm from './components/apartment/ApartmentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Apartment List</h1>
      <ApartmentStoreProvider>
        <ApartmentList />
        <ApartmentForm />
      </ApartmentStoreProvider>
    </div>
  );
}

export default App;
