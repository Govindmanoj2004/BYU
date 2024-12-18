import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import History from './pages/History';
import Liked from './pages/Liked';

const RouterUser = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path='/liked' element={<Liked />} />
    </Routes>
  );
};

export default RouterUser;
