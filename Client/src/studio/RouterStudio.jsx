import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GraphPage from './pages/GraphPage';

const RouterStudio = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/analytics' element={<GraphPage />} />
    </Routes>
  );
};

export default RouterStudio;
