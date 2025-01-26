import React from 'react';
import style from './card.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Face5Icon from '@mui/icons-material/Face5';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const card = () => {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <span className={style.number}>893</span>
        <span className={style.string}>
          <PlayArrowIcon
            sx={{ color: '#1976d2', fontSize: '12px', marginRight: '4px' }}
          />
          Videos
        </span>
      </div>
      <div className={style.block}>
        <span className={style.number}>52</span>
        <span className={style.string}>
          <VisibilityIcon
            sx={{ color: '#1976d3', fontSize: '12px', marginRight: '4px' }}
          />
          Views
        </span>
      </div>
      <div className={style.block}>
        <span className={style.number}>2891</span>
        <span className={style.string}>
          <LocalAtmIcon
            sx={{ color: 'green', fontSize: '12px', marginRight: '4px' }}
          />
          Revenue
        </span>
      </div>
      <div className={style.block}>
        <span className={style.number}>136</span>
        <span className={style.string}>
          <Face5Icon
            sx={{ color: 'green', fontSize: '12px', marginRight: '4px' }}
          />
          Subscriptions
        </span>
      </div>
      <div className={style.block}>
        <span className={style.number}>274</span>
        <span className={style.string}>
          <FavoriteBorderIcon
            sx={{ color: 'red', fontSize: '12px', marginRight: '4px' }}
          />
          Likes
        </span>
      </div>
    </div>
  );
};

export default card;
