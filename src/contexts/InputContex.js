import React, {useState, createContext} from 'react';

export const InputContext = createContext();

export const InputProvider = (props) =>{
  const [inputType, setInputType] = useState('drag');

  return (
    <InputContext.Provider 
      value={[inputType, setInputType]}
    >
      {props.children}  
    </InputContext.Provider>
  );
};

