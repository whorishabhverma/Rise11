import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlinedIcon /> },
    { text: 'My Cases', icon: <FolderOutlinedIcon /> },
    { text: 'Activities', icon: <TimelineOutlinedIcon /> },
    { text: 'Calendar', icon: <CalendarTodayOutlinedIcon /> },
    { text: 'Files', icon: <DescriptionOutlinedIcon /> },
    { text: 'Open a Dispute', icon: <GavelOutlinedIcon /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 250;

  const drawerContent = (
    <Box 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden' 
      }}
    >
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          component="img"
          src="/jur.png"
          sx={{
            width: '60%',
            marginTop: -2,
            marginLeft: 5,
            borderRadius: '5%'
          }}
        />
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ color: '#000000' }}
          >
            {/* <CloseIcon /> */}
          </IconButton>
        )}
      </Box>
      <List sx={{ overflow: 'hidden', flex: '1 1 auto' }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
                color: '#000000'
              },
              padding: '9px 20px'
            }}
          >
            <ListItemIcon sx={{ color: '#1e88e5' }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: '1rem',
                color: '#000000',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '500'
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          padding: 2,
          marginTop: '5',
          textAlign: 'center'
        }}
      >
        <Box
          component="img"
          src="/law1.png"
          alt="Justice Illustration"
          sx={{
            width: '100%',
            marginTop: 2,
            borderRadius: '5%'
          }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: theme.zIndex.drawer + 1,
            color: '#1e88e5'
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#ffffff',
            color: '#000000',
            height: '100%',
            position: 'fixed',
            overflow: 'hidden' // Prevent scrolling
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;