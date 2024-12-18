import React from 'react';
import './videoBox.scss';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Thumbnail from '../../../assets/image.jpg';
import Luffy from '../../../assets/luffy.jpg';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const VideoBox = ({ setOpen }) => {
  return (
    <div className='Container' onClick={() => setOpen(true)}>
      <div className='card-list'>
        <article className='card'>
          <figure className='card-image'>
            <img
              src={Thumbnail}
              alt='An orange painted blue, cut in half laying on a blue background'
            />
          </figure>
          <div className='card-header'>
            <StyledBadge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
              sx={{ marginRight: '15px' }}
            >
              <Avatar alt='Nanami' src={Luffy} />
            </StyledBadge>
            <a href='#'>When life gives you oranges</a>
          </div>
          <div className='card-footer'>
            <div className='card-meta card-meta--views'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                display='block'
                id='EyeOpen'
              >
                <path d='M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
              2,465
            </div>
            <div className='card-meta card-meta--date'>
              <ThumbUpAltOutlinedIcon sx={{ color: '#565656', scale: '0.8' }} />
              10K
            </div>
            <div className='more'>
              <IconButton aria-label='More'>
                <MoreVertIcon sx={{ color: '#565656', scale: '0.8' }} />
              </IconButton>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default VideoBox;
