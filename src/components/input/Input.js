import React, { useContext } from 'react';
import { InputContext } from '../../contexts/InputContex';
import { DataProvider } from '../../contexts/DataContext';
import { BinProvider } from '../../contexts/BinContext';
import { ResultProvider } from '../../contexts/ResultContext';
import CsvForm from './CsvForm';
import InputType from './InputType';
import TextInput from './TextInput';
import BinOptions from './BinOptions';

const Input = () => {
  const [inputType, setInputType] = useContext(InputContext);

  return (
    <div className='input-container'> 
      <InputType />
      <BinProvider>
        <DataProvider> 
          { inputType === 'drag' ? <CsvForm /> : <TextInput /> }
          <BinOptions />
        </DataProvider>
      </BinProvider>
    </div>
  );
}

export default Input;
