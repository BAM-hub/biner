import React, { useContext } from 'react';
import { BinContext } from '../../contexts/BinContext';

const BinOptions = () => {
  const [binData, setBindata] = useContext(BinContext);

  return (
    <div className='bin-options'>
    <span>
        Bin By Mean:
        <input 
          type="radio" 
          onClick={ () => setBindata({
            ...binData,
            binType: 'bbm'
          }) }
          name='bin'
        />
      </span>

      <span>
        Bin By Boundries:
        <input 
          type="radio" 
          onClick={ () => setBindata({
            ...binData,
            binType: 'bbb'
          }) }
          name='bin'
        />
      </span>

      <input 
        type="text" 
        placeholder='Number of Bin Members'
        onChange={e => setBindata({
          ...binData,
          binCount: e.target.value
        }) }
      />
    </div>
  );
}

export default BinOptions;
