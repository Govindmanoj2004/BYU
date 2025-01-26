import React from 'react';
import Sidebar from './Components/sidebar/sidebar';
import RouterStudio from './RouterStudio';
import { Box } from '@mui/material';
import Style from './Studio.module.css';

const Studio = () => {
  return (
    <div className={Style.main}>
      <Box className={Style.container} sx={{ flex: 1 }}>
        <RouterStudio />
      </Box>
      <Box className={Style.sidebar}>
        <Sidebar />
      </Box>
    </div>
  );
};

export default Studio;
