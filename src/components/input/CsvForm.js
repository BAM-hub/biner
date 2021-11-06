import React, { useContext, useState } from 'react';
import { CSVReader } from 'react-papaparse';

import { formatData, formatResult } from '../../utils/format';
import { binByMean, binByBoundaries } from '../../utils/simpleData';

import { ResultContext } from '../../contexts/ResultContext';
import { BinContext } from '../../contexts/BinContext';
import { DataContext } from '../../contexts/DataContext';

const CsvForm = () => {
  const [data, setData] = useContext(DataContext);
  const [result, setResult] = useContext(ResultContext);
  const [binData, setBinData] = useContext(BinContext);
  
  const { binType, binCount } = binData;
  const handleDrop = (results) => {
    //console.log(results.data);
    setData(formatData(results.data));
    console.log(data);
    if(binType === 'bbm') {
      setResult(binByMean(data, binCount)); 
    } else {
      setResult(formatResult(binByBoundaries(data, binCount)));
    }

  }
  return (
    <div className="drop">
      <CSVReader
        noClick
        addRemoveButton
        config={{
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            handleDrop(results);
          }
        }}
      >
        Drop A CSV File Here....
      </CSVReader>
    </div> 
  );
};

export default CsvForm;
