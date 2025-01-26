import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from './setThum.module.css';
import ComputerIcon from '@mui/icons-material/Computer';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DoneIcon from '@mui/icons-material/Done';
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

const SetThumb = () => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = event => {
    if (event.target.files.length > 0) {
      setFileSelected(true);
    }
  };

  return (
    <Box className={style.container}>
      <Box
        className={style.local}
        component='label'
        sx={{ borderColor: fileSelected ? '#1976d2' : 'rgba(0, 0, 0, 0.1)' }}
      >
        <VisuallyHiddenInput type='file' onChange={handleFileChange} multiple />
        {fileSelected ? (
          <DoneIcon sx={{ color: '#1976d2', fontSize: '40px' }} />
        ) : (
          <ComputerIcon sx={{ color: '#1976d2', fontSize: '40px' }} />
        )}
        <Typography sx={{ marginTop: '10px', fontSize: '12px' }}>
          {fileSelected ? 'Selected' : 'Upload file'}
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

export default SetThumb;
