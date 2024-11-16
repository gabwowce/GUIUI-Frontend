import React from 'react';
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

const Elements = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sticky Side Menu */}
      <StyledSideMenu>
        <Button variant="textLeft" startIcon={<ImportContactsIcon />}>All</Button>
        <Button variant="textLeft" startIcon={<SmartButtonIcon />}>Buttons</Button>
        <Button variant="textLeft" startIcon={<WallpaperIcon />}>Backgrounds</Button>
        <Button variant="textLeft" startIcon={<ViewInArIcon />}>3D Models</Button>
        <Button variant="textLeft" startIcon={<ViewCarouselIcon />}>Cards</Button>
        <Button variant="textLeft" startIcon={<AutorenewIcon />}>Loaders</Button>
        <Button variant="textLeft" startIcon={<ListAltIcon />}>Forms</Button>
        <Button variant="textLeft" startIcon={<InputIcon />}>Inputs</Button>
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
