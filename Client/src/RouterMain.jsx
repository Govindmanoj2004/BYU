import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from './user/User';
import Studio from './studio/Studio';

const RouterMain = () => {
  return (
    <Routes>
      <Route path='/*' element={<User />} />
      <Route path='/studio/*' element={<Studio />} />
    </Routes>
  );
};

export default RouterMain;
