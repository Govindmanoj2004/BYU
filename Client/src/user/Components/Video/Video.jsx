import React from 'react';
import './video.scss';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Avatar from '@mui/material/Avatar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import IconButton from '@mui/material/IconButton';
import Luffy from '../../../assets/luffy.jpg';

export const Video = () => {
  return (
    <div className='videoMain'>
      <div className='app-main'>
        <div className='video-call-wrapper'>
          <div className='video-participant'>
            <img src={Luffy} alt='participant' />
          </div>
        </div>
        <div className='video-call-actions'>
          <div className='video-action-button profile'>
            <Avatar
              alt='Nanami'
              src={Luffy}
              sx={{ borderRadius: '8px', scale: '0.8' }}
            />
            <div className='description'>Video title goes here and etc</div>
            <IconButton aria-label='More'>
              <PersonAddAltIcon
                sx={{ color: 'black', scale: '1', backgroundColor: '#fff' }}
              />
            </IconButton>
          </div>
          <button className='video-action-button'>
            <ThumbUpAltOutlinedIcon
              sx={{ color: 'black', scale: '1', backgroundColor: '#fff' }}
            />
          </button>
          <button className='video-action-button'>
            <ThumbDownOffAltIcon
              sx={{ color: 'black', scale: '1', backgroundColor: '#fff' }}
            />
          </button>
          <button className='video-action-button'>
            <ShareIcon
              sx={{ color: 'black', scale: '1', backgroundColor: '#fff' }}
            />
          </button>
          <button className='video-action-button'>
            <MoreHorizIcon
              sx={{ color: 'black', scale: '1', backgroundColor: '#fff' }}
            />
          </button>
          <button className='video-action-button magnifier'>
            <ErrorOutlineIcon
              sx={{ color: 'red', scale: '1.4', backgroundColor: '#fff' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Video;
