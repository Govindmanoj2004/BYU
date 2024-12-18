import React from 'react';
import Style from './Cells.module.css';
import Lan from '../../../assets/image.jpg';
import Luffy from '../../../assets/luffy.jpg';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { default as OverflowEllipsis } from 'react-overflow-ellipsis';

const Cell = () => {
  return (
    <div className={Style.main}>
      <div className={Style.thumbnail}>
        <img src={Lan} alt='Thumbnail' className='Video' />
      </div>
      <div className={Style.details}>
        <div className={Style.title}>
          <Avatar alt='Remy Sharp' src={Luffy} />
          <div className={Style.heading}>Video Title</div>
          <div className={Style.options}>
            <div className={Style.like}>
              <ThumbUpOffAltIcon
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  scale: '0.9',
                  color: 'black',
                }}
              />
              10k
            </div>
            <IconButton aria-label='More'>
              <MoreVertIcon sx={{ color: 'black', scale: '0.8' }} />
            </IconButton>
          </div>
        </div>
        <div className={Style.description}>
          Video Description Video Description Video Description Video
          Description Video Description
        </div>
      </div>
    </div>
  );
};

export default Cell;
