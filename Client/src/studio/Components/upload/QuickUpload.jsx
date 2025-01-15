import React, { useState } from 'react';
import style from './QuickUpload.module.css';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Progress from './../progress/progress';
import { CardOverflow } from '@mui/joy';
import VDetails from '../VDetails/VDetails';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper', // Material-UI specific
  boxShadow: 24,
  p: 3,
  height: 'auto', // Increased height
  width: '50%', // Optional: Adjust this if necessary
  borderRadius: '20px',
};

const QuickUpload = ({ RemoveRedEyeIcon }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <label id='sent' className={style.send}>
      <input type='checkbox' />
      <article>
        <div className={style.front}>
          <span className={style.symbol}>
            <RemoveRedEyeIcon sx={{ color: '#b02ce1', fontSize: '40px' }} />
          </span>
          <var>32k</var>
          <h3>Active Viewers</h3>
        </div>
        <div className={style.back}>
          <Button variant='contained' onClick={handleOpen}>
            Upload
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={styleModal}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Text in a modal
              </Typography>
              <Progress
                activeStep={activeStep}
                handleReset={handleReset}
                handleBack={handleBack}
                handleSkip={handleSkip}
                handleNext={handleNext}
                isStepOptional={isStepOptional}
                isStepSkipped={isStepSkipped}
              />
              <Box className={style.scroll}>
                {activeStep === 0 && <VDetails />}
              </Box>
            </Box>
          </Modal>
        </div>
      </article>
    </label>
  );
};

export default QuickUpload;
