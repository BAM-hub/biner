import React from 'react';
import './App.css';
import { InputProvider } from './contexts/InputContex';
import { ResultProvider } from './contexts/ResultContext';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <div className='container'>
      <InputProvider>
        <ResultProvider>
          <Layout />
        </ResultProvider>
      </InputProvider>
    </div>
  );
};

export default App;