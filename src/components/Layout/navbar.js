import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarBtns from '../NavbarBtns';
import {elementsCategories,generatorCategories} from '../../data/MenuBtns';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from '../../redux/navigationActions';

import { Toolbar, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import logo from '../../assets/logo.png';
import ProfileNavBtn from './ProfileNavBtn';
import SpecialButton from './SpecialButton';
import SignupModal from '../Login/SignupModal';




export const Navbar = () => {
  
  const theme = useTheme();

  const location = useLocation();

  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.navigation.activeRoute);

  const [popupOpen, setPopupOpen] = useState(false);
 
  const togglePopup = () => setPopupOpen(!popupOpen);

  const user = useSelector((state) => state.auth.user);  
  const isLoggedIn = user !== null; 

  const handleRouteClick = (route) => {
    dispatch(setActiveRoute(route));
  };

  const [hovered, setHovered] = useState({ elements: false, generators: false });

  const handleMouseEnter = (type) => {
    setHovered((prevState) => ({ ...prevState, [type]: true }));
  };
  
  const handleMouseLeave = (type) => {
    setHovered((prevState) => ({ ...prevState, [type]: false }));
  };

  useEffect(() => {
    setHovered({ elements: false, generators: false });
  }, [location]);


  const isElementsActive = location.pathname.startsWith('/elements');
  const isGeneratorsActive = location.pathname.startsWith('/generators');

  const isPopularActive = location.pathname.startsWith('/popular');
  const isContactActive = location.pathname.startsWith('/contact');

  return (
    <StyledAppBar maxWidth={false}> 
      <StyledToolbar>
        <Box component="img" src={logo} alt="logo" sx={{width:'80px', height:"25px"}}/>
        <StyledBox>
          <Box sx={{position:'relative'}} onMouseEnter={() => handleMouseEnter('elements')} onMouseLeave={() => handleMouseLeave('elements')}>
            <Button
              variant="text"
              component={Link}
              endIcon={<KeyboardArrowDownIcon />}
              to="/elements"
              sx={{
                ...(isElementsActive && { backgroundColor: theme.palette.btn.primary, color: theme.palette.text.primary }),
              }}
              onClick={() => handleRouteClick('/All')}>
              Elements
            </Button>
            {
              hovered.elements &&
              <StyledMenu>
                {elementsCategories.map(({path,label,icon})=>(
                  <NavbarBtns
                    variant={'menuItem'}
                    to={path}
                    onClick={() => handleRouteClick(`/${label}`)}
                    startIcon={icon}
                    label={label}
                  />
                ))}
              </StyledMenu>
            }
          </Box>

          <Box sx={{position:'relative'}} onMouseEnter={() => handleMouseEnter('generators')} onMouseLeave={() => handleMouseLeave('generators')}>
            <Button
              variant="text"
              component={Link}
              endIcon={<KeyboardArrowDownIcon />}
              to="/generators"
              sx={{
                ...(isGeneratorsActive && { backgroundColor: theme.palette.btn.primary, color: theme.palette.text.primary }),
              }}
              onClick={() => handleRouteClick('/Buttons')}>
              Generators
            </Button>
            {
              hovered.generators &&
              <StyledMenu>
                {generatorCategories.map(({path,label,icon})=>(
                  <NavbarBtns
                    variant={'menuItem'}
                    to={path}
                    onClick={() => handleRouteClick(`/${label}`)}
                    startIcon={icon}
                    label={label}
                  />
                ))}
              </StyledMenu>
            }
          </Box>
          
          <Button
            variant="text"
            component={Link}
            to="/popular"
            onClick={() => handleRouteClick('/Popular')} 
            sx={(isPopularActive && { backgroundColor: theme.palette.btn.primary, color: theme.palette.text.primary })}>
            Popular
          </Button>
          <Button
            variant="text"
            component={Link}
            to="/contact"
            onClick={() => handleRouteClick('/Contact')} 
            sx={(isContactActive && { backgroundColor: theme.palette.btn.primary, color: theme.palette.text.primary })}>
            Contact
          </Button>
        </StyledBox>

        <Box sx={boxStyle}>
          {/* {
            isLoggedIn && <SpecialButton>Create</SpecialButton>  
          } */}
          <SpecialButton component={Link} to="/create" onClick={() => handleRouteClick('/create')}>Create</SpecialButton>  

          {
            isLoggedIn ?
            <ProfileNavBtn/>
            :
            <Button variant="toggle" onClick={togglePopup}>
              Login/Signup
            </Button>
          }
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
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: theme.spacing(1.5),
  width:'400px',
  padding:'1rem',
  zIndex:9999,

}));


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

const StyledAppBar = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width:"100%",
  maxWidth: '2260px'
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
