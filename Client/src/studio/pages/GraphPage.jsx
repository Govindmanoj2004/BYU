import React from 'react';
import Charts from '../Components/Charts/charts';
import LineChart from '../Components/Charts/LineChart';
import { Box } from '@mui/material';

const GraphPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      <Charts />
      <LineChart />
    </Box>
  );
};

export default GraphPage;
