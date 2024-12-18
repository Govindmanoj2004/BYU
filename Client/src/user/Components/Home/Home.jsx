import { Box } from '@mui/material';
import React, { useState } from 'react';
import Styles from './Home.module.css';
import Video from '../Video/Video';
import Livechat from '../Livechat/Livechat';
import VideoBox from '../VideoBox/videoBox';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box className={Styles.containerMain}>
      {open ? (
        <>
          <Video />
          <Livechat />
        </>
      ) : (
        <>
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
          <VideoBox setOpen={setOpen} />
        </>
      )}
    </Box>
  );
};

export default Home;
