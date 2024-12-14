import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Badge, Menu, MenuItem, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const Header = () => {
  // Dummy state for notifications and profile menu
  const [notifications, setNotifications] = useState([
    "New message from Admin",
    "Update your profile",
    "Reminder: Meeting at 3 PM",
  ]); // Dummy notifications
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  // Handlers for notifications menu
  const handleNotificationsOpen = (event) => setAnchorElNotifications(event.currentTarget);
  const handleNotificationsClose = () => setAnchorElNotifications(null);

  // Handlers for profile menu
  const handleProfileOpen = (event) => setAnchorElProfile(event.currentTarget);
  const handleProfileClose = () => setAnchorElProfile(null);

  return (
    <AppBar 
    position="fixed" 
    color="default" 
    elevation={0} 
    sx={{ alignItems: 'flex-start', paddingLeft: 2, marginBottom : 10 }}
  >
    {/* <AppBar
      position="static"
    //   color="primary"
    //   elevation={3}
      sx={{
        paddingLeft: 2,
        backgroundColor: "white", // Modern dark color
      }}
    > */}
      <Toolbar sx={{ minHeight: 'auto', width: '100%' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="/jur.png" // Replace with the actual path to your logo
            alt="Logo"
            style={{ marginRight: 8, height: 30 }} // Adjust height as needed
          />
          {/* <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
            My Dashboard
          </Typography> */}
        </Box>

        {/* Icons Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Notifications Icon with Badge */}
          <IconButton
            sx={{
              color: '#1e88e5',
              '&:hover': { color: 'blue' }, // Hover effect
            }}
            onClick={handleNotificationsOpen}
          >
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>

          <Menu
            anchorEl={anchorElNotifications}
            open={Boolean(anchorElNotifications)}
            onClose={handleNotificationsClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <List>
              {notifications.map((notification, index) => (
                <ListItem key={index} divider>
                  <ListItemText primary={notification} />
                </ListItem>
              ))}
            </List>
            <MenuItem onClick={handleNotificationsClose} sx={{ justifyContent: 'center', fontWeight: 'bold' }}>
              Clear All
            </MenuItem>
          </Menu>

          {/* Account Icon with Menu */}
          <IconButton
            sx={{
              color: '#1e88e5',
              '&:hover': { color: 'blue' }, // Hover effect
            }}
            onClick={handleProfileOpen}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleProfileClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
            <Divider />
            <MenuItem onClick={handleProfileClose} sx={{ color: 'red' }}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
