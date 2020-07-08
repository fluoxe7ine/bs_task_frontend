import React from 'react';
import './styles.scss';
import DotLoader from 'react-spinners/DotLoader';

export const Loader = () => (
  <div className="loader">
    <DotLoader color="#eeeeee" />
  </div>
);
