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
    <Box>
      <Box
        sx={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          marginBottom: '15px',
        }}
      >
        <Typography
          sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          Video Details: Title, Description, and More
        </Typography>
        <Typography
          sx={{
            marginBottom: '15px',
            fontWeight: '400',
            fontSize: '0.875rem',
            color: 'gray',
            marginBottom: '15px',
          }}
        >
          Provide essential information about your video to help viewers
          understand its content and engage effectively.
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
      </Box>
      <Box
        sx={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          marginBottom: '15px',
        }}
      >
        <Typography
          sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          Thumbnail: Choose an Eye-Catching Image
        </Typography>
        <Typography
          sx={{
            marginBottom: '10px',
            fontWeight: '400',
            fontSize: '0.875rem',
            color: 'gray',
          }}
        >
          Choose an eye-catching thumbnail that best represents your video and
          attracts viewers.
        </Typography>
        <Thumb />
      </Box>
      <Box
        sx={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
        }}
      >
        <Typography
          sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          Upload: Share Your Video with the World
        </Typography>
        <Typography
          sx={{
            marginBottom: '10px',
            fontWeight: '400',
            fontSize: '0.875rem',
            color: 'gray',
          }}
        >
          Upload your video file to share it with your audience and make it
          available for viewing.
        </Typography>
        <VideoUpload />
      </Box>
    </Box>
  );
};

export default VDetails;
