import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InputIcon from '@mui/icons-material/Input';

import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from '../redux/navigationActions';

const Elements = () => {
  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.navigation.activeRoute);

  const handleRouteClick = (route) => {
    dispatch(setActiveRoute(route));
  };
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sticky Side Menu */}
      <StyledSideMenu>
        <Button variant="textLeft" startIcon={<ImportContactsIcon />}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "All" })}
          onClick={() => handleRouteClick('/All')}
          component={Link}
          to="/elements/all"
        >
          All
        </Button>
        <Button variant="textLeft" startIcon={<SmartButtonIcon />}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "Buttons" })}
          onClick={() => handleRouteClick('/Buttons')}
          component={Link}
          to="/elements/buttons"
        >
          Buttons
        </Button>
        <Button variant="textLeft" startIcon={<WallpaperIcon />}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "Backgrounds" })}
          onClick={() => handleRouteClick('/Backgrounds')}
          component={Link}
          to="/elements/backgrounds"
        >
          Backgrounds
        </Button>
        <Button variant="textLeft" startIcon={<ViewInArIcon />}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "Models" })}
          onClick={() => handleRouteClick('/Models')}
          component={Link}
          to="/elements/models"
          >
          3D Models
          </Button>
        <Button variant="textLeft" startIcon={<ViewCarouselIcon />}
          sx={(theme) =>theme.components.toggleStyle({ activeRoute, theme, route: "Cards" })}
          onClick={() => handleRouteClick('/Cards')}
          component={Link}
          to="/elements/cards"
          >
          Cards
          </Button>
        <Button variant="textLeft" startIcon={<AutorenewIcon />}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "Loaders" })}
          onClick={() => handleRouteClick('/Loaders')}
          component={Link}
          to="/elements/loader"
          >
            Loaders
          </Button>
        <Button variant="textLeft" startIcon={<ListAltIcon />}
        sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "Forms" })}
        onClick={() => handleRouteClick('/Forms')}
        component={Link}
        to="/elements/forms"
        >
          Forms
          </Button>
        <Button variant="textLeft" startIcon={<InputIcon />}
          sx={(theme) => theme.components.toggleStyle({ activeRoute, theme, route: "Inputs" })}
          onClick={() => handleRouteClick('/Inputs')}
          component={Link}
          to="/elements/inputs"
          >
          Inputs
        </Button>
      </StyledSideMenu>

      {/* Main Content */}
      <Box >
        <h1>Elements Page</h1>
        <p>This is the elements page content.</p>
        {/* Add more content for scrolling */}
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
        <p>More content here to allow scrolling...</p>
      </Box>
    </Box>
  );
};

export default Elements;

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
