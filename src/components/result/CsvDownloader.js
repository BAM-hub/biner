import React, { useContext } from 'react';
import { CSVDownloader, jsonToCSV } from 'react-papaparse';
import { ResultContext } from '../../contexts/ResultContext';
import { formatCsvobject } from '../../utils/format';

const CsvDownloader = () => {
  const [result, setResult] = useContext(ResultContext);
  
  return (
    <div className="download">

      <CSVDownloader
      className='download'
      data={() => formatCsvobject(result)}
      type='button'
      
      >
        Download
      </CSVDownloader>
    </div>
  );
};

export default CsvDownloader;
