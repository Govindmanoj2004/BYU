import React, { useState } from 'react';
import {
  Home,
  Analytics,
  LiveTv,
  Settings,
  ExitToApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import style from './sidebar.module.css';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';


const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = index => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  //For navigation between pages

  const handleNavigation = route => {
    navigate(route);
  };

  const navigate = route => {
    window.location.href = route;
  };

  return (
    <div className={style.bottomNav}>
      {/* Left Items */}
      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
      >
        <Analytics onClick={() => handleNavigation('/studio/analytics')} />
      </motion.div>

      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
      >
        <LiveTv />
      </motion.div>

      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
      >
        <PersonIcon onClick={() => handleNavigation('/studio/profile')} />
      </motion.div>

      {/* Center Home Button */}
      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
        onClick={() => handleNavigation('/studio')}
      >
        <Home />
      </motion.div>

      {/* Right Items */}
      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
      >
        <Settings />
      </motion.div>

      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
      >
        <InfoIcon onClick={() => handleNavigation('/studio/about')} />
      </motion.div>

      <motion.div
        className={style.navItem}
        onMouseEnter={() => handleMouseEnter(6)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.5,
          color: 'rgba(255, 0, 0, 1)',
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          },
        }}
      >
        <ExitToApp className={style.logout} />
      </motion.div>
    </div>
  );
};

export default Sidebar;
