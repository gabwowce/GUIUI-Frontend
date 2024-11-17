import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; 
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Modal, TextField, Typography, useMediaQuery, Container, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';
import SpecialButton from './SpecialButton';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InputIcon from '@mui/icons-material/Input';
import SignupModal from './Login/SignupModal';

export const Navbar = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/'); 
  const togglePopup = () => setPopupOpen(!popupOpen);

  // Naudojame useSelector, kad gautume prisijungusio vartotojo informaciją
  const user = useSelector((state) => state.auth.user);  // Tiesiog paimame 'user' iš authReducer
  const isLoggedIn = user !== null; // Jei vartotojas yra, tai jis prisijungęs

  const theme = useTheme();

  const handleRouteClick = (route) => {
    setActiveRoute(route);
  };

  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          GUIUI
        </Typography>
        <StyledBox>
          <Box sx={{position:'relative'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button
              variant="text"
              component={Link}
              endIcon={<KeyboardArrowDownIcon />}
              to="/elements"
              sx={(theme) => toggleStyle({ activeRoute, theme, route: "elements" })}
              onClick={() => handleRouteClick('/elements')}>
              Elements
            </Button>

            {
              hovered &&
              <StyledMenu>
                <Button variant="menuItem" startIcon={<ImportContactsIcon />}>All</Button>
                <Button variant="menuItem" startIcon={<SmartButtonIcon />}>Buttons</Button>
                <Button variant="menuItem" startIcon={<WallpaperIcon />}>Backgrounds</Button>
                <Button variant="menuItem" startIcon={<ViewInArIcon />}>3D Models</Button>
                <Button variant="menuItem" startIcon={<ViewCarouselIcon />}>Cards</Button>
                <Button variant="menuItem" startIcon={<AutorenewIcon />}>Loaders</Button>
                <Button variant="menuItem" startIcon={<ListAltIcon />}>Forms</Button>
                <Button variant="menuItem" startIcon={<InputIcon />}>Inputs</Button>
              </StyledMenu>
            }

          </Box>
          
          <Button
            variant="text"
            component={Link}
            to="/popular"
            onClick={() => handleRouteClick('/popular')} 
            sx={(theme) => toggleStyle({ activeRoute, theme, route: "popular" })}>
            Popular
          </Button>
          <Button
            variant="text"
            component={Link}
            to="/contact"
            onClick={() => handleRouteClick('/contact')} 
            sx={(theme) => toggleStyle({ activeRoute, theme, route: "contact" })}>
            Contact
          </Button>
        </StyledBox>

        <Box sx={boxStyle}>
          {/* {
            isLoggedIn && <SpecialButton>Create</SpecialButton>  
          } */}
          <SpecialButton component={Link} to="/create" onClick={() => handleRouteClick('/create')}>Create</SpecialButton>  
          <Button variant="toggle" onClick={togglePopup}>
            {isLoggedIn ? 
              <IconButton onClick={togglePopup} sx={{ color: theme.palette.text.primary }}>
                <AccountCircleIcon />
              </IconButton> 
              : 'Login/Signup'}
          </Button>
        </Box>
      </StyledToolbar>

      <SignupModal hoverEffectEnabled={true} open={popupOpen} onClose={togglePopup}/>
    </StyledAppBar>
  );
};

export default Navbar;




const StyledMenu = styled(Box)(({ theme }) => ({
  position:'absolute',
  borderRadius:'8px',
  background: theme.palette.background.default,
  border: `1px solid ${theme.palette.btn.primary}`,
  display: 'grid', // nustatome grid išdėstymą
  gridTemplateColumns: '1fr 1fr', // du stulpeliai, abu užima po 50% vietos
  gap: theme.spacing(1.5),
  width:'400px',
  padding:'1rem',
  zIndex:9999,

}));

const toggleStyle = ({activeRoute, theme, route}) =>({
    backgroundColor: activeRoute ===  `/${route}` ? theme.palette.btn.primary : 'transparent',
    color: activeRoute === `/${route}` ? theme.palette.text.primary : 'inherit',
  }); 

const boxStyle ={
  display:'flex',
  flexDirection:'row',
  justifySelf:'center',
  gap:'1rem'
}

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
