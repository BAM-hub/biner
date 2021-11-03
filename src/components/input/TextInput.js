import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { BinContext } from '../../contexts/BinContext';
import { binByMean, binByBoundries } from '../../utils/simpleData';
import { ResultContext } from '../../contexts/ResultContext';

const TextInput = () => {

  const [data, setData] = useContext(DataContext);
  const [binData, setBinData] = useContext(BinContext);
  const [result, setResult] = useContext(ResultContext);

  const { binType, binCount } = binData;

  const onSubmit = e => {
    e.preventDefault();

    if(binType === 'bbm' ){
      
      setResult(binByMean(data, binCount));
      //console.log(result);
    } else {
      binByBoundries(data, binCount);
    }

  };
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        type='text'
        placeholder='Enter Simple Data here'
        value={data}
        onChange={e => setData(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default TextInput;
