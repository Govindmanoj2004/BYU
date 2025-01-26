import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Styles from './Home.module.css';
import Video from '../Video/Video';
import Livechat from '../Livechat/Livechat';
import VideoBox from '../VideoBox/videoBox';
import { motion } from 'framer-motion';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInStyle = {
    opacity: 1 - scrollY / 500,
    transition: 'opacity 0.3s ease',
  };

  return (
    <Box className={Styles.containerMain}>
      {open ? (
        <>
          <Video />
          <Livechat />
        </>
      ) : (
        <>
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              style={fadeInStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <VideoBox setOpen={setOpen} />
            </motion.div>
          ))}
        </>
      )}
    </Box>
  );
};

export default Home;
