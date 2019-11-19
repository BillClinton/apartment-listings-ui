import React from 'react';
import ApartmentStoreProvider from './contexts/ApartmentStore';
import ApartmentList from './components/ApartmentList';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Apartment List</h1>
      <ApartmentStoreProvider>
        <ApartmentList />
      </ApartmentStoreProvider>
    </div>
  );
}

export default App;
