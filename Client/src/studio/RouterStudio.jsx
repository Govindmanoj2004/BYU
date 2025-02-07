import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GraphPage from './pages/GraphPage';
import MyProfile from './pages/MyProfile';

const RouterStudio = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/analytics' element={<GraphPage />} />
      <Route path='/profile' element={<MyProfile />} />
    </Routes>
  );
};

export default RouterStudio;
