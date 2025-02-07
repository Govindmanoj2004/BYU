import * as React from 'react';
import { motion } from 'framer-motion';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Divider } from '@mui/material';

export default function Alert() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 1,
          p: 1,
          borderRadius: 2,
          bgcolor: 'rgba(25, 118, 210, 0.05)', // Subtle blue background
        }}
      >
        <MailOutlineIcon sx={{ color: '#1976d2', fontSize: 26 }} />
        <Typography
          variant='subtitle1'
          fontWeight={600}
          color='primary'
          sx={{ cursor: 'pointer' }}
        >
          Notifications
        </Typography>
      </Box>
      <Divider sx={{ mb: 1 }} /> {/* Added Divider */}
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <ListItem sx={{ borderRadius: 2, mb: 1, bgcolor: '#F5F5F5' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#FF6F61' }}>
              <ReportProblemIcon sx={{ color: 'white' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Update your video details as soon as possible.'
            secondary='Jan 9, 2014'
          />
        </ListItem>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <ListItem sx={{ borderRadius: 2, mb: 1, bgcolor: '#F5F5F5' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#4CAF50' }}>
              <CheckCircleIcon sx={{ color: 'white' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='2 complaints are received for your video.'
            secondary='Jan 7, 2014'
          />
        </ListItem>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <ListItem sx={{ borderRadius: 2, mb: 1, bgcolor: '#F5F5F5' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#03A9F4' }}>
              <LightbulbIcon sx={{ color: 'white' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='You are in the top 5 content creators.'
            secondary='July 20, 2014'
          />
        </ListItem>
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        exit={{ height: 0, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        style={{
          overflow: 'hidden',
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        {isExpanded && (
          <ListItem sx={{ borderRadius: 2, mb: 1, bgcolor: '#F5F5F5' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#4CAF50' }}>
                <CheckCircleIcon sx={{ color: 'white' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='2 more complaints are received for your video.'
              secondary='Feb 5, 2025'
            />
          </ListItem>
        )}
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        onClick={handleExpandToggle}
        sx={{ cursor: 'pointer', mt: 2 }}
      >
        <motion.div
          animate={{
            rotate: isExpanded ? 180 : 0,
            scale: 1.1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <KeyboardArrowDownIcon
            sx={{ color: '#1976d2', fontSize: '25px', cursor: 'pointer' }}
          />
        </motion.div>
      </motion.div>
    </List>
  );
}
