import React from 'react';
import style from './profile.module.css';
import TimelineIcon from '@mui/icons-material/Timeline';

const Profile = () => {
  //Navigation
  const handleNavigation = route => {
    navigate(route);
  };

  const navigate = route => {
    window.location.href = route;
  };
  return (
    <div className={style.profileCard}>
      <header className={style.profileHeader}>
        {/* <span className='mdi mdi-arrow-left mdi-24px'></span>
        <span className='mdi mdi-dots-horizontal mdi-24px'></span> */}
      </header>
      <main className={style.profileMain}>
        <img
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          alt='Profile'
          className={style.profileImage}
        />
        <h2 className={style.profileName}>Tyler, The Creator</h2>
        <p className={style.profileFollowers}>1.2M followers</p>
        <div className={style.profileActions}>
          <button className={style.followButton}>Edit</button>
          <button className={style.moreOptionsButton}>
            <TimelineIcon
              sx={{ color: 'white', fontSize: '20px' }}
              onClick={() => handleNavigation('/studio/analytics')}
            />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
