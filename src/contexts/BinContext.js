import React, {useState, createContext} from 'react';

export const BinContext = createContext();

export const BinProvider = (props) =>{
  const [binData, setBinData] = useState({
    binType: '',
    binCount: ''
  });

  return (
    <BinContext.Provider 
      value={[binData, setBinData]}
    >
      {props.children}  
    </BinContext.Provider>
  );
};

