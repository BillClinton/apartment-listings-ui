import React from 'react';
import ApartmentContextProvider from './contexts/ApartmentContext';
import ApartmentList from './components/ApartmentList';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Apartment List</h1>
      <ApartmentContextProvider>
        <ApartmentList />
      </ApartmentContextProvider>
    </div>
  );
}

export default App;
