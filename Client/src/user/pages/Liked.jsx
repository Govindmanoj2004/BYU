import React from 'react';
import Cell from '../Components/List/Cell';
import Style from './Page.module.css';

const Liked = () => {
  return (
    <div className={Style.list}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
};

export default Liked;
