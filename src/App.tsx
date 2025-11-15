
import './App.css';
import ProductList from './ProductList';
import ProductCart from './ProductCart';

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Retail App</h1>
      </header>
      <main style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
        <ProductList />
        <ProductCart />
      </main>
    </div>
  );
}

export default App;
