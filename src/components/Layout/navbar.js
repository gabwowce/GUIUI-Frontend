import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from '../../redux/navigationActions';

import { Toolbar, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InputIcon from '@mui/icons-material/Input';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';

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
              sx={(theme) => theme.components.toggleStyle({ activeRoute,theme, route: "elements" })}
              onClick={() => handleRouteClick('/elements')}>
              Elements
            </Button>

            {
              hovered.elements &&
              <StyledMenu>
                <Button variant="menuItem" component={Link} to="/elements/all" onClick={() => handleRouteClick('/All')} startIcon={<ImportContactsIcon />}>All</Button>
                <Button variant="menuItem" component={Link} to="/elements/buttons" onClick={() => handleRouteClick('/Buttons')} startIcon={<SmartButtonIcon />}>Buttons</Button>
                <Button variant="menuItem" component={Link} to="/elements/backgrounds" onClick={() => handleRouteClick('/Backgrounds')} startIcon={<WallpaperIcon />}>Backgrounds</Button>
                <Button variant="menuItem" component={Link} to="/elements/models" onClick={() => handleRouteClick('/Models')} startIcon={<ViewInArIcon />}>3D Models</Button>
                <Button variant="menuItem" component={Link} to="/elements/card" onClick={() => handleRouteClick('/Cards')} startIcon={<ArticleOutlinedIcon />}>Cards</Button>
                <Button variant="menuItem" component={Link} to="/elements/loader" onClick={() => handleRouteClick('/Loaders')} startIcon={<AutorenewIcon />}>Loaders</Button>
                <Button variant="menuItem" component={Link} to="/elements/forms" onClick={() => handleRouteClick('/Forms')} startIcon={<ListAltIcon />}>Forms</Button>
                <Button variant="menuItem" component={Link} to="/elements/inputs" onClick={() => handleRouteClick('/Inputs')} startIcon={<InputIcon />}>Inputs</Button>
              </StyledMenu>
            }

          </Box>

          <Box sx={{position:'relative'}} onMouseEnter={() => handleMouseEnter('generators')} onMouseLeave={() => handleMouseLeave('generators')}>
            <Button
              variant="text"
              component={Link}
              endIcon={<KeyboardArrowDownIcon />}
              to="/generators"
              sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "generators" })}
              onClick={() => handleRouteClick('/generators')}>
              Generators
            </Button>

            {
              hovered.generators &&
              <StyledMenu>
                <Button variant="menuItem" component={Link} to="/generators/button" onClick={() => handleRouteClick('/Button')} startIcon={<SmartButtonIcon />}>Button</Button>
                <Button variant="menuItem" component={Link} to="/generators/backgrounds" onClick={() => handleRouteClick('/Backgrounds')} startIcon={<WallpaperIcon />}>Backgrounds</Button>
                <Button variant="menuItem" component={Link} to="/generators/card" onClick={() => handleRouteClick('/Card')} startIcon={<ArticleOutlinedIcon />}>Card</Button>
                <Button variant="menuItem" component={Link} to="/generators/loader" onClick={() => handleRouteClick('/Loader')} startIcon={<AutorenewIcon />}>Loader</Button>
                <Button variant="menuItem" component={Link} to="/generators/forms" onClick={() => handleRouteClick('/Forms')} startIcon={<ListAltIcon />}>Forms</Button>
                <Button variant="menuItem" component={Link} to="/generators/inputs" onClick={() => handleRouteClick('/Inputs')} startIcon={<InputIcon />}>Inputs</Button>
                <Button variant="menuItem" component={Link} to="/generators/figure" onClick={() => handleRouteClick('/figure')} startIcon={<PermDataSettingOutlinedIcon />}>figure</Button>
              </StyledMenu>
            }

          </Box>
          
          <Button
            variant="text"
            component={Link}
            to="/popular"
            onClick={() => handleRouteClick('/popular')} 
            sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "popular" })}>
            Popular
          </Button>
          <Button
            variant="text"
            component={Link}
            to="/contact"
            onClick={() => handleRouteClick('/contact')} 
            sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "contact" })}>
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
  display: 'grid', // nustatome grid išdėstymą
  gridTemplateColumns: '1fr 1fr', // du stulpeliai, abu užima po 50% vietos
  gap: theme.spacing(1.5),
  width:'400px',
  padding:'1rem',
  zIndex:9999,

}));

// const toggleStyle = ({activeRoute, theme, route}) =>({
//     backgroundColor: activeRoute ===  `/${route}` ? theme.palette.btn.primary : 'transparent',
//     color: activeRoute === `/${route}` ? theme.palette.text.primary : 'inherit',
//   }); 

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
