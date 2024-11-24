import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';


import SmartButtonIcon from '@mui/icons-material/SmartButton';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InputIcon from '@mui/icons-material/Input';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from '../redux/navigationActions';


const Generators = () => {
  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.navigation.activeRoute);

  const handleRouteClick = (route) => {
    dispatch(setActiveRoute(route));
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <StyledSideMenu>
        <Button
          variant="textLeft"
          startIcon={<SmartButtonIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Button' })}
          onClick={() => handleRouteClick('/Button')}
          component={Link}
          to="/generators/button"
        >
          Button
        </Button>
        <Button
          variant="textLeft"
          startIcon={<WallpaperIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Backgrounds' })}
          onClick={() => handleRouteClick('/Backgrounds')}
          component={Link}
          to="/generators/backgrounds"
        >
          Backgrounds
        </Button>
        <Button
          variant="textLeft"
          startIcon={<ArticleOutlinedIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Card' })}
          onClick={() => handleRouteClick('/Card')}
          component={Link}
          to="/generators/card"
        >
          Card
        </Button>
        <Button
          variant="textLeft"
          startIcon={<AutorenewIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Loader' })}
          onClick={() => handleRouteClick('/Loader')}
          component={Link}
          to="/generators/loader"
        >
          Loader
        </Button>
        <Button
          variant="textLeft"
          startIcon={<ListAltIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Forms' })}
          onClick={() => handleRouteClick('/Forms')}
          component={Link}
          to="/generators/forms"
        >
          Forms
        </Button>
        <Button
          variant="textLeft"
          startIcon={<InputIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Inputs' })}
          onClick={() => handleRouteClick('/Inputs')}
          component={Link}
          to="/generators/inputs"
        >
          Inputs
        </Button>
        <Button
          variant="textLeft"
          startIcon={<PermDataSettingOutlinedIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/figure' })}
          onClick={() => handleRouteClick('/figure')}
          component={Link}
          to="/generators/figure"
        >
          Figure
        </Button>
      </StyledSideMenu>

      <StyledBox>
        <Outlet />
      </StyledBox>
    </Box>
  );
};

export default Generators;

const StyledBox = styled(Box)({
  flex: 1,
  padding: '1rem',
  border: '1px solid lightgray',
  borderRadius: '8px',
})

const StyledSideMenu = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0, 
  background: theme.palette.background.default,
  display: 'flex', 
  flexDirection:'column',
  gap: theme.spacing(1.5),
  marginRight:'2rem',
  width:'250px',
  padding:'1rem',
  height: '100vh', 
  overflowY: 'auto', 
}));


const toggleStyle = ({activeRoute, theme, route}) =>({
  backgroundColor: activeRoute ===  `${route}` ? theme.palette.btn.primary : 'transparent',
  color: activeRoute === `${route}` ? theme.palette.text.primary : 'inherit',
}); 