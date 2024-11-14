import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Modal, TextField, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Atidaro meniu, kai užvedama pelė
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Uždaro meniu, kai pelė palieka meniu arba mygtuką
  };

  const togglePopup = () => setPopupOpen(!popupOpen);

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          MyLogo
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {/* Mygtukas su rodyklės ikona */}
          <Button
            onMouseEnter={handleMenuOpen}  // Atidaro meniu užvedus pelę
            onMouseLeave={handleMenuClose} // Uždaro meniu, kai pelė palieka mygtuką
            sx={{ color: 'white' }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Elements
          </Button>
          
          {/* Meniu, kuris atsidaro užvedus pelę ant mygtuko */}
          <Menu
            anchorEl={anchorEl} // Prikabina meniu prie mygtuko
            open={Boolean(anchorEl)} // Atidaro meniu, kai anchorEl nėra null
            onClose={handleMenuClose} // Uždaro meniu, kai paliekama pelė
            MenuListProps={{
              onMouseLeave: handleMenuClose, // Uždaro meniu, kai pelė palieka meniu
            }}
            sx={{ 
              '& .MuiMenu-paper': { 
                top: '100%',  // Užtikrins, kad meniu atsiranda po mygtuku
                left: 0,
              },
            }}
          >
            {/* Meniu elementai */}
            <MenuItem onClick={handleMenuClose}>Buttons</MenuItem>
            <MenuItem onClick={handleMenuClose}>Checkboxes</MenuItem>
            <MenuItem onClick={handleMenuClose}>Backgrounds</MenuItem>
            <MenuItem onClick={handleMenuClose}>3D Models</MenuItem>
          </Menu>
        </Box>

        {/* Popular & Contact */}
        <Button component={Link} to="/popular" sx={{ color: 'white' }}>Popular</Button>
        <Button component={Link} to="/contact" sx={{ color: 'white' }}>Contact</Button>

        {/* Create & Login/Register */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={togglePopup} sx={{ color: 'white' }}>
            {isLoggedIn ? 'Create' : 'Login/Register'}
          </Button>
          <IconButton onClick={togglePopup} sx={{ color: 'white' }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </StyledToolbar>

      {/* Modal for Login/Register */}
      <Modal open={popupOpen} onClose={togglePopup}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>{isLoggedIn ? 'Create Account' : 'Login/Register'}</Typography>
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
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
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
