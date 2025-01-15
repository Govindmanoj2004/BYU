import { Box } from '@mui/material';
import React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import Thumb from './../thumb/setThumb';
import VideoUpload from './../videoUpload/videoUpload';

const StyledTextarea = styled(TextareaAutosize)(() => ({
  resize: 'none',
  border: 'none',
  minWidth: 0,
  outline: 0,
  padding: 0,
  paddingBlockStart: '1em',
  paddingInlineEnd: 'var(--Textarea-paddingInline)',
  flex: 'auto',
  alignSelf: 'stretch',
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus + textarea + label': {
    color: 'var(--Textarea-focusedHighlight)',
  },
}));

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Textarea-minHeight) - 1em) / 2)',
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerTextarea = React.forwardRef(function InnerTextarea(props, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledTextarea minRows={2} {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>Title</StyledLabel>
    </React.Fragment>
  );
});
const InnerTextareaDes = React.forwardRef(function InnerTextareaDes(
  props,
  ref
) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledTextarea minRows={2} {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>Description</StyledLabel>
    </React.Fragment>
  );
});
const VDetails = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '20px' }}
      >
        Details
      </Typography>
      <Typography
        sx={{
          marginBottom: '10px',
          fontWeight: 'bold',
          fontSize: '12px',
          color: 'gray',
        }}
      >
        Add a title and description to your video...!
      </Typography>
      {/* Title */}
      <Textarea
        slots={{ textarea: InnerTextarea }}
        slotProps={{ textarea: { placeholder: 'Video Title' } }}
        sx={{ borderRadius: '6px', marginBottom: '10px' }}
      />
      <Textarea
        slots={{ textarea: InnerTextareaDes }}
        slotProps={{
          textarea: { placeholder: 'Tell viewers about your video.' },
        }}
        sx={{ borderRadius: '6px', height: '130px' }}
      />
      <Box sx={{ marginTop: '20px' }}>
        <Typography
          sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '20px' }}
        >
          Thumbnail
        </Typography>
        <Typography
          sx={{
            marginBottom: '10px',
            fontWeight: 'bold',
            fontSize: '12px',
            color: 'gray',
          }}
        >
          Set the thumbnail thats stands out and draws viewers attention..!
        </Typography>
        <Thumb />
      </Box>
      <Box sx={{ marginTop: '20px' }}>
        <Typography
          sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '20px' }}
        >
          Upload
        </Typography>
        <Typography
          sx={{
            marginBottom: '10px',
            fontWeight: 'bold',
            fontSize: '12px',
            color: 'gray',
          }}
        >
          Upload your video...!
        </Typography>
        <Box>
          {/* Edit */}
          <VideoUpload />
        </Box>
      </Box>
    </Box>
  );
};

export default VDetails;
