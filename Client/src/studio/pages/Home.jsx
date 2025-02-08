import React, { useState, useEffect } from 'react';
import QuickUpload from './../Components/upload/QuickUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Comp from './../Components/Card/card';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Wifi from '../Components/Wifi/Wifi';

const Home = () => {
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
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '5px',
        flexWrap: 'wrap',
        height: '100vh',
        paddingBottom: '100px',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <motion.div
        style={{
          ...fadeInStyle,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          gap:' 20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Comp />
        <Wifi />
      </motion.div>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          justifyContent: 'space-evenly',
        }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            style={fadeInStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <QuickUpload RemoveRedEyeIcon={RemoveRedEyeIcon} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
