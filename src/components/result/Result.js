import React, { useContext } from 'react';
import { ResultContext } from '../../contexts/ResultContext';
const Result = () => {

  const[result, setResult] = useContext(ResultContext);
  const arrLen = () => {
    if(result === undefined) {
      return false;
    }
    return true;
  }
  return (
    <div className="result">
      <p>Results:</p>
      { arrLen()  && (
        result.map((res) => (
          <p key={Math.random()}>{res}, </p>
        ))
      )}
    </div>
  );
};

export default Result;
