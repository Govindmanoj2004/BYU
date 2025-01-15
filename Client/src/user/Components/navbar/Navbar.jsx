import React from 'react';
import './navbar.scss';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h2>BYU</h2>
      </div>
      <div className='links'>
        {/* <div className='search'>
          <input type='text' placeholder='Search' />
          <SearchOutlinedIcon
            sx={{
              color: 'black',
              position: 'absolute',
              top: '50%',
              left: '10px',
              translate: '0 -50%',
              width: '20px',
              height: '20px',
              marginRight: '10px',
            }}
          />
        </div> */}
        <Badge badgeContent={4} color='primary'>
          <NotificationsActiveOutlinedIcon sx={{ color: 'black' }} />
        </Badge>
        <Avatar sx={{ bgcolor: 'lightblue' }}>G</Avatar>
      </div>
    </nav>
  );
};
export default Navbar;
