import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';

const CsvForm = () => {
  const [data, setData] = useState({});


  return (
    <div className="drop">
      <CSVReader
        noClick
        addRemoveButton
        config={{
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            setData(results.data);
            console.log(data);
          }
        }}
      >
        Drop A CSV File Here....
      </CSVReader>
    </div> 
  );
};

export default CsvForm;
