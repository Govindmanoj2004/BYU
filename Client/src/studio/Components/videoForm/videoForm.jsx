import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import React, { useState } from 'react';

const VideoForm = () => {
  const [ageRestricted, setAgeRestricted] = useState('');

  const handleChange = event => {
    setAgeRestricted(event.target.value);
  };

  return (
    <Box
      sx={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}
    >
      <Typography
        variant='h6'
        sx={{ marginBottom: '10px', fontWeight: 'bold' }}
      >
        Age-Restricted Content Confirmation
      </Typography>
      <Typography
        variant='body2'
        sx={{ marginBottom: '20px', color: 'gray', lineHeight: '1.5' }}
      >
        To comply with our platform guidelines, please confirm whether your
        video contains age-restricted content. Select <strong>‘Yes’</strong> if
        the video is intended for viewers aged 18 and above, or{' '}
        <strong>‘No’</strong> if it is appropriate for all audiences.
      </Typography>
      <RadioGroup value={ageRestricted} onChange={handleChange}>
        <FormControlLabel
          value='yes'
          control={<Radio />}
          label='Yes, the video contains age-restricted content (18+)'
          sx={{
            color: ageRestricted === 'yes' ? '#1976d2' : 'black',
            fontWeight: ageRestricted === 'yes' ? 'bold' : 'normal',
            marginBottom: '10px',
          }}
        />
        <FormControlLabel
          value='no'
          control={<Radio />}
          label='No, the video is suitable for all audiences'
          sx={{
            color: ageRestricted === 'no' ? '#1976d2' : 'black',
            fontWeight: ageRestricted === 'no' ? 'bold' : 'normal',
          }}
        />
      </RadioGroup>
    </Box>
  );
};

export default VideoForm;
