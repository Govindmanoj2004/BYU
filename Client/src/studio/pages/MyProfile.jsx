import React from 'react';
import Profile from '../Components/Profile/profile';
import Status from '../Components/Status/Status';
import { Box } from '@mui/material';
import Alert from '../Components/Alert/alert';
import Comp from './../Components/Card/card';

const MyProfile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
      }}
    >
      {/* Sub 1 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '380px',
            flexDirection: 'row',
            padding: '10px',
            gap: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <Profile />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '50%',
            flexDirection: 'column',
            padding: '10px',
          }}
        >
          <Comp />
          <Status />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: '100%',
          padding: '10px',
        }}
      >
        <Alert />
      </Box>
    </Box>
  );
};

export default MyProfile;
