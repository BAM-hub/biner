import React from 'react';
import './App.css';
import { InputProvider } from './contexts/InputContex';
import { ResultProvider } from './contexts/ResultContext';
import Input from './components/input/Input';
import Result from './components/result/Result';
import CsvDownloader from './components/result/CsvDownloader';

const App = () => {
  return (
    <div className='container'>
      <InputProvider>
        <ResultProvider>
          <Input />
          <Result />
          <CsvDownloader />
        </ResultProvider>
      </InputProvider>
    </div>
  );
};

export default App;