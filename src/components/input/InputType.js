import React, { useContext } from 'react';
import { InputContext } from '../../contexts/InputContex';

const InputType = () => {
  const [inputType, setInputType] = useContext(InputContext);

  return (
    <div className='input-type'>
      <span>
        Drag a file:
        <input 
          type="radio"  
          onClick={() => setInputType('drag')}
          name='input'
        />
      </span>
      <span>
        Text input:
        <input 
          type="radio" 
          onClick={ () => setInputType('text') }
          name='input'
        />
      </span>
      
    </div>
  );
}

export default InputType;
