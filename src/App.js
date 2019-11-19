import React from 'react';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import ApartmentStoreProvider from './contexts/ApartmentStore';
import ApartmentList from './components/apartment/ApartmentList';
import ApartmentForm from './components/apartment/ApartmentForm';

function App() {
  return (
    <div className="App">
      <SemanticToastContainer position="top-left" />
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
