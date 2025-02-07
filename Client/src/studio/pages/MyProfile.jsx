import React from 'react';
import Profile from '../Components/Profile/profile';
import Status from '../Components/Status/Status';
import { Box } from '@mui/material';
import Alert from '../Components/Alert/alert';

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
            height: '%0%',
            flexDirection: 'row',
            padding: '10px',
            gap: '10px',
          }}
        >
          <Profile />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            padding: '10px',
          }}
        >
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
