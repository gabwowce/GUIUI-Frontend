import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SpecialButton = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Box sx={{position:'relative'}}>
    <StyledButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>{children}
      
    </StyledButton>
    <HoverEffect hovered={hovered} />
    </Box>
    
  );
};

const HoverEffect = styled('div')(({ hovered }) => ({
    position: 'absolute',
    top: hovered ? '-40%' : '-80%',  
    left: '50%',
    transform: 'translate(-50%, -50%)',  
    width: '340px',
    height: '340px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 50%, rgba(174, 68, 90, 1), rgba(174, 68, 90, 0.7), rgba(174, 68, 90, 0.2), rgba(174, 68, 90, 0.05), rgba(174, 68, 90, 0) 70%)',
    zIndex: 10,
    opacity: hovered ? 1 : 0, 
    transition: 'top 1s ease-out, opacity 1s ease-out',  
    pointerEvents: 'none',  
  }));

// Styled button component
const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  textTransform: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  zIndex: 12,
  background: 'linear-gradient(217deg, rgba(174,68,90,.8), rgba(174,68,90,0) 70.71%), linear-gradient(127deg, rgba(174,68,90,.6), rgba(174,68,90,0) 70.71%), linear-gradient(336deg, rgba(174,68,90,.7), rgba(174,68,90,0) 70.71%)',
  color: 'white',
 
}));

export default SpecialButton;
