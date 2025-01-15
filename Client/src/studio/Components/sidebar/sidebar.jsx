import React from 'react';
import style from './sidebar.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SettingsIcon from '@mui/icons-material/Settings';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import MessageIcon from '@mui/icons-material/Message';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.left}>
        <Avatar sx={{ bgcolor: '#1976d2' }} className={style.avatar}>
          N
        </Avatar>
        <IconButton aria-label='More' sx={{ borderRadius: '50%' }}>
          <LogoutIcon sx={{ marginLeft: 'auto', color: 'white' }} />
        </IconButton>
      </div>
      <div className={style.right}>
        <h1>BYU</h1>
        <nav className={style.buttons}>
          <button>
            <i className={style.aiDashboard}>
              <HomeIcon />
            </i>
            <span>Home</span>
          </button>
          <button>
            <i className={style.aiPeopleMultiple}>
              <PlayCircleOutlineIcon />
            </i>
            <span>Contents</span>
          </button>
          <button>
            <i className={style.aiCreditCard}>
              <SignalCellularAltIcon />
            </i>
            <span>Analytics</span>
          </button>
          <button>
            <i className={style.aiCalendar}>
              <AttachMoneyIcon />
            </i>
            <span>Earn</span>
          </button>
          <button>
            <i className={style.aiStatisticUp}>
              <MessageIcon />
            </i>
            <span>Meassages</span>
          </button>
          <button>
            <i className={style.aiCheckBox}>
              <AutoFixHighIcon />
            </i>
            <span>Customization</span>
          </button>
          <button>
            <i className={style.aiSettingsVertical}>
              <SettingsIcon />
            </i>
            <span>Settings</span>
          </button>
          <button>
            <i className={style.aiTriangleAlert}>
              <PriorityHighIcon />
            </i>
            <span>Alert</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
