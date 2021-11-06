import React, { useContext } from 'react';
import { ResultContext } from '../../contexts/ResultContext';
const Result = () => {

  const[result, setResult] = useContext(ResultContext);

  return (
    <div className="result">
      <p>Results:</p>
      { result !== undefined  && (
        result.map((res) => (
          <div 
            className="res"
            key={Math.random()}
            >{res}</div>
        ))
      )}
    </div>
  );
};

export default Result;
