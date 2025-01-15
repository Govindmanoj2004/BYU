import { Box, Typography } from '@mui/material';
import React from 'react';
import style from './setThum.module.css';
import ComputerIcon from '@mui/icons-material/Computer';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const setThumb = () => {
  return (
    <Box className={style.container}>
      <Box className={style.local} component='label'>
        <VisuallyHiddenInput
          type='file'
          onChange={event => console.log(event.target.files)}
          multiple
        />
        <ComputerIcon sx={{ color: '#1976d2', fontSize: '40px' }} />
        <Typography sx={{ marginTop: '10px', fontSize: '12px' }}>
          Upload file
        </Typography>
      </Box>
      <Box className={style.gen}>
        <AutoFixHighIcon sx={{ color: '#1976d2', fontSize: '40px' }} />
        <Typography sx={{ marginTop: '10px', fontSize: '12px' }}>
          Auto-generate
        </Typography>
      </Box>
    </Box>
  );
};

export default setThumb;
