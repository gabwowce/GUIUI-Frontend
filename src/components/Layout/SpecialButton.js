import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SpecialButton = ({ children, hoverEffectEnabled = true, fullWidth = false, ...props }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (hoverEffectEnabled) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverEffectEnabled) {
      setHovered(false);
    }
  };

  return (
    <Box sx={{ position: 'relative', width: fullWidth ? '100%' : 'auto' }}>
      <StyledButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        fullWidth={fullWidth} // Here we pass fullWidth to the button
        {...props}
      >
        {children}
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
  width: '100%',  // Ensure the button itself takes full width when `fullWidth` is passed
}));

export default SpecialButton;
