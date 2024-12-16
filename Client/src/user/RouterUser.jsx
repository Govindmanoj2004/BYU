import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import History from './pages/History';

const RouterUser = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />} />
    </Routes>
  );
};

export default RouterUser;
