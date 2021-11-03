import React from 'react';
import { CSVDownloader } from 'react-papaparse';

const CsvDownloader = () => {
  return (
    <CSVDownloader
    data={[
        {
          "Column 1": "1-1",
          "Column 2": "1-2",
          "Column 3": "1-3",
          "Column 4": "1-4",
        },]}
      type='button'
    >
      Download
    </CSVDownloader>
  );
};

export default CsvDownloader;
