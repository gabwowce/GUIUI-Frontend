import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import NavbarBtns from '../components/NavbarBtns';
import {generatorCategories} from '../data/MenuBtns';

import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

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

      {generatorCategories.map(({path,label,icon})=>(
        <NavbarBtns
          variant={'textLeft'}
          to={path}
          onClick={() => handleRouteClick(`/${label}`)}
          startIcon={icon}
          label={label}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: `${label}` })}
        />
      ))}

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

