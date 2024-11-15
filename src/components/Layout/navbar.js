import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Modal, TextField, Typography, useMediaQuery, Container, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';
import SpecialButton from './SpecialButton';


export const Navbar = () =>{
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/'); // Track the active route

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const togglePopup = () => setPopupOpen(!popupOpen);

  const theme = useTheme();

  // Handle active route when a button is clicked
  const handleRouteClick = (route) => {
    setActiveRoute(route);
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          MyLogo
        </Typography>

        <StyledBox>
          <Box>
            <ButtonGroup variant="text">
              {/* Main Button */}
              <Button
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
                color="primary"
                endIcon={<KeyboardArrowDownIcon />}
              >
                Elements
              </Button>
              
              {/* Dropdown Button */}
              <Button
                variant="text"
                color="primary"
                onClick={handleMenuOpen}
              >
                {/* Empty button to trigger the menu */}
              </Button>
            </ButtonGroup>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
              }}
            >
              <MenuItem onClick={handleMenuClose}>Buttons</MenuItem>
              <MenuItem onClick={handleMenuClose}>Checkboxes</MenuItem>
              <MenuItem onClick={handleMenuClose}>Backgrounds</MenuItem>
              <MenuItem onClick={handleMenuClose}>3D Models</MenuItem>
            </Menu>
          </Box>

          <Button
            variant="text"
            color="secondary"
            component={Link}
            to="/popular"
            onClick={() => handleRouteClick('/popular')} // Update active route
            sx={{
              backgroundColor: activeRoute === '/popular' ? theme.palette.btn.primary : 'transparent',
              color: activeRoute === '/popular' ? theme.palette.text.primary : 'inherit',
            }}
          >
            Popular
          </Button>
          <SpecialButton>
            Contact
          </SpecialButton>
        </StyledBox>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={togglePopup} sx={{ color: theme.palette.text.primary, textTransform: 'none' }}>
            {isLoggedIn ? 'Create' : 'Login/Signup'}
          </Button>
          <IconButton onClick={togglePopup} sx={{ color: theme.palette.text.primary }}>
            {isLoggedIn ? <AccountCircleIcon /> : ''}
          </IconButton>
        </Box>
      </StyledToolbar>

      <Modal open={popupOpen} onClose={togglePopup}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>{isLoggedIn ? 'Create Account' : 'Login'}</Typography>
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" fullWidth>
            {isLoggedIn ? 'Create Account' : 'Login'}
          </Button>
          <Button onClick={() => setIsLoggedIn(!isLoggedIn)} sx={{ mt: 2, textAlign: 'center' }}>
            {isLoggedIn ? 'Already have an account? Login' : 'Don’t have an account? Register'}
          </Button>
        </Box>
      </Modal>
    </StyledAppBar>
  );
};

export default Navbar;

const StyledBox = styled(Box)(({ theme }) => ({
  display:'flex',
  flexDirection:'row',
  justifySelf:'flex-end',
  flexGrow:1,
  width:'100%',
  marginLeft:'2rem',
  gap:'1rem'
}));

const StyledAppBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width:"100%",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: 24,
};
