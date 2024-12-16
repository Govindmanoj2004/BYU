import React from 'react';
import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { Link } from 'react-router';
const { useState } = React;

const Sidebar = () => {
  const [isShrinkView, setIsShrinkView] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };
  const handleMouseEnter = () => {
    setIsShrinkView(false);
  };

  const handleMouseLeave = () => {
    setIsShrinkView(true);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`sidebar-container${isShrinkView ? ' shrink' : ''}`}
    >
      {/* <button
        className='sidebar-viewButton'
        type='button'
        aria-label={isShrinkView ? 'Expand Sidebar' : 'Shrink Sidebar'}
        title={isShrinkView ? 'Expand' : 'Shrink'}
        onClick={handleSidebarView}
      >
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
          className='feather feather-chevron-left'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>
      </button> */}
      <div className='sidebar-wrapper'>
        <div className='sidebar-themeContainer'>
          <label
            htmlFor='theme-toggle'
            className={`sidebar-themeLabel${isDarkMode ? ' switched' : ''}`}
          >
            <input
              className='sidebar-themeInput'
              type='checkbox'
              id='theme-toggle'
              onChange={handleThemeChange}
            />
            <div className='sidebar-themeType light'>
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
                className='sidebar-listIcon'
              >
                <circle cx='12' cy='12' r='5' />
                <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
              </svg>
              <span className='sidebar-themeInputText'>Light</span>
            </div>
            <div className='sidebar-themeType dark'>
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
                className='sidebar-listIcon'
              >
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
              </svg>
              <span className='sidebar-themeInputText'>Dark</span>
            </div>
          </label>
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-listItem active'>
            <a>
              <HomeIcon className='sidebar-listIcon' />
              <span className='sidebar-listItemText'>Home</span>
            </a>
          </li>
          <li className='sidebar-listItem'>
            <Link  to='/history'>
              <HistoryIcon className='sidebar-listIcon' />
              <span className='sidebar-listItemText'>History</span>
            </Link>
          </li>
          <li className='sidebar-listItem'>
            <a>
              <PlaylistPlayIcon className='sidebar-listIcon' />
              <span className='sidebar-listItemText'>Playlist</span>
            </a>
          </li>
          <li className='sidebar-listItem'>
            <a>
              <ThumbUpOffAltIcon className='sidebar-listIcon' />
              <span className='sidebar-listItemText'>Liked Videos</span>
            </a>
          </li>
          <li className='sidebar-listItem'>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='sidebar-listIcon'
              >
                <circle cx='12' cy='12' r='3' />
                <path d='M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z' />
              </svg>
              <span className='sidebar-listItemText'>Settings</span>
            </a>
          </li>
          <li className='sidebar-listItem'>
            <a>
              <ReportGmailerrorredOutlinedIcon className='sidebar-listIcon' />
              <span className='sidebar-listItemText'>Report</span>
            </a>
          </li>
          <li className='sidebar-listItem'>
            <a>
              <QuestionMarkOutlinedIcon className='sidebar-listIcon' />
              <span className='sidebar-listItemText'>Help</span>
            </a>
          </li>
        </ul>
        <div className='sidebar-profileSection'>
          <IconButton aria-label='More'>
            <LogoutIcon sx={{ marginLeft: 'auto', color: 'red' }} />
          </IconButton>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
