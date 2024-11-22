import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InputIcon from '@mui/icons-material/Input';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import { styled } from '@mui/system';

import ButtonGenerator from '../components/Layout/generators/ButtonGenerator';
import BackgroundGenerator from '../components/Layout/generators/BackgroundGenerator';
import CardGenerator from '../components/Layout/generators/CardGenerator';
import LoaderGenerator from '../components/Layout/generators/LoaderGenerator';
import FormsGenerator from '../components/Layout/generators/FormsGenerator';
import InputsGenerator from '../components/Layout/generators/InputsGenerator';
import FigureGenerator from '../components/Layout/generators/figureGenerator';

const Generators = () => {
  const [activeRoute, setActiveRoute] = useState('/Button'); 
  const [activeGenerator, setActiveGenerator] = useState('/Button'); 

  const handleRouteClick = (route, generator) => {
    setActiveRoute(route); 
    setActiveGenerator(generator); 
  };


  const renderGenerator = () => {
    switch (activeGenerator) {
      case 'Button':
        return <ButtonGenerator />;
      case 'Backgrounds':
        return <BackgroundGenerator />;
      case 'Card':
        return <CardGenerator />;
      case 'Loader':
        return <LoaderGenerator />;
      case 'Forms':
        return <FormsGenerator />;
      case 'Inputs':
        return <InputsGenerator />;
      case 'figure':
        return <FigureGenerator />;
      default:
        return <ButtonGenerator />;
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      {/* Šoninis meniu */}
      <StyledSideMenu>
        <Button
          variant="textLeft"
          startIcon={<SmartButtonIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Button' })}
          onClick={() => handleRouteClick('/Button', 'Button')}
        >
          Button
        </Button>
        <Button
          variant="textLeft"
          startIcon={<WallpaperIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Backgrounds' })}
          onClick={() => handleRouteClick('/Backgrounds', 'Backgrounds')}
        >
          Backgrounds
        </Button>
        <Button
          variant="textLeft"
          startIcon={<ViewCarouselIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Card' })}
          onClick={() => handleRouteClick('/Card', 'Card')}
        >
          Card
        </Button>
        <Button
          variant="textLeft"
          startIcon={<AutorenewIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Loader' })}
          onClick={() => handleRouteClick('/Loader', 'Loader')}
        >
          Loader
        </Button>
        <Button
          variant="textLeft"
          startIcon={<ListAltIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Forms' })}
          onClick={() => handleRouteClick('/Forms', 'Forms')}
        >
          Forms
        </Button>
        <Button
          variant="textLeft"
          startIcon={<InputIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/Inputs' })}
          onClick={() => handleRouteClick('/Inputs', 'Inputs')}
        >
          Inputs
        </Button>
        <Button
          variant="textLeft"
          startIcon={<PermDataSettingIcon />}
          sx={(theme) => toggleStyle({ activeRoute, theme, route: '/figure' })}
          onClick={() => handleRouteClick('/figure', 'figure')}
        >
          Figure
        </Button>
      </StyledSideMenu>

      {/* Turinio sritis */}
      <Box
        sx={{
          flex: 1,
          padding: '1rem',
          border: '1px solid lightgray',
          borderRadius: '8px',
        }}
      >
        {renderGenerator()}
      </Box>
    </Box>
  );
};

export default Generators;

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