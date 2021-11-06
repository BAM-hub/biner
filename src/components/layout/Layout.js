import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Input from '../input/Input';
import Result from '../result/Result';
import Note from '../Note';
import CsvDownloader from '../result/CsvDownloader';

const Layout = () => {
  return (
    <Fragment>
      <Note />
      <Input />

      <Result />
      <CsvDownloader />
    </Fragment>
  );
};

export default Layout;
