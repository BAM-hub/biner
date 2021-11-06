import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Note = () => {
  const [hide, setHide] = useState(false);

  return (
    <Fragment>
  { !hide && (
    <div className='note'>
      <button onClick={() => setHide(true)}>X</button>
      <ul>
        <li>
          Please Enter a CSV File with one column named data.
        </li>
        <li>
          If you don't see the result please retry uploading the file. 
        </li>
        <li>
          You can also enter data in Text form (CSV) eg: 1,2,3... .
        </li>
        <li>
          Bin Method is required, Might crash if not inserted.
        </li>
        <li>
          Number of Bin Members is required.
        </li>
      </ul>
    </div>)}
    </Fragment>
  );
};

export default Note;
