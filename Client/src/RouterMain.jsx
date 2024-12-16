import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from './user/User';

const RouterMain = () => {
  return (
    <Routes>
      <Route path='/*' element={<User />} />
    </Routes>
  );
};

export default RouterMain;
