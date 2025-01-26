import React from 'react';
import style from './Preview.module.css';
import { Box, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Preview = () => {
  return (
    <Box
      className={style.cards}
      sx={{
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        marginBottom: '15px',
      }}
    >
      <Box
        sx={{
          marginBottom: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: '100%',
          width: '100%',
        }}
      >
        <Typography
          sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          Preview:Sneak Peek into Your Video
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
          Review the title, description, and other details to make your video
          stand out.
        </Typography>
      </Box>
      <Box>
        <article className={`${style.card} ${style.card}`}>
          <div className={style.cardInfoHover}>
            <PlayArrowIcon sx={{ color: 'black' }} />
            <div className={style.cardClockInfo}>
              <svg className={style.cardClock} viewBox='0 0 24 24'>
                <path d='M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z' />
              </svg>
              <span className={style.cardTime}>15 min</span>
            </div>
          </div>
          <div className={style.cardImg}></div>
          <a href='#' className={style.cardLink}>
            <div className={style.cardImgHover}></div>
          </a>
          <div className={style.cardInfo}>
            <span className={style.cardCategory}> Title</span>
            <h3 className={style.cardTitle}>
              Random description about the video
            </h3>
          </div>
        </article>
      </Box>
    </Box>
  );
};

export default Preview;
