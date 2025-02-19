import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GraphPage from './pages/GraphPage';
import MyProfile from './pages/MyProfile';
import About from './pages/About';
import Mystream from './pages/Mystream';

const RouterStudio = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/analytics' element={<GraphPage />} />
      <Route path='/profile' element={<MyProfile />} />
      <Route path='/about' element={<About />} />
      <Route path='/mystream' element={<Mystream />} />
    </Routes>
  );
};

export default RouterStudio;
