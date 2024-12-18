import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import History from './pages/History';
import Liked from './pages/Liked';
import Report from './pages/Report';
import Help from './pages/Help';

const RouterUser = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path='/liked' element={<Liked />} />
      <Route path='/report' element={<Report />} />
      <Route path='/help' element={<Help />} />
    </Routes>
  );
};

export default RouterUser;
