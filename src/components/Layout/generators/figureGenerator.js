import React, { useState } from 'react';
import { Box, Button, TextField, Slider, Typography, Select, MenuItem } from '@mui/material';

const FigureGenerator = () => {
  // Būsenos mygtuko savybėms
  const [buttonText, setButtonText] = useState('Click Me!');
  const [buttonColor, setButtonColor] = useState('#1976d2'); // Numatytas MUI primary spalva
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState(4);
  const [buttonSize, setButtonSize] = useState('medium');

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Button Generator
      </Typography>

      {/* Konfigūracijos panelė */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', marginBottom: '2rem' }}>
        <TextField
          label="Button Text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
        />

        <Box>
          <Typography gutterBottom>Button Color</Typography>
          <input
            type="color"
            value={buttonColor}
            onChange={(e) => setButtonColor(e.target.value)}
            style={{ width: '100%' }}
          />
        </Box>

        <Box>
          <Typography gutterBottom>Text Color</Typography>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            style={{ width: '100%' }}
          />
        </Box>

        <Box>
          <Typography gutterBottom>Border Radius</Typography>
          <Slider
            value={borderRadius}
            onChange={(e, value) => setBorderRadius(value)}
            min={0}
            max={50}
          />
          <Typography>{borderRadius}px</Typography>
        </Box>

        <Box>
          <Typography gutterBottom>Button Size</Typography>
          <Select
            value={buttonSize}
            onChange={(e) => setButtonSize(e.target.value)}
            fullWidth
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Dinaminis mygtukas */}
      <Box sx={{ textAlign: 'center', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <Typography gutterBottom>Preview:</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: buttonColor,
            color: textColor,
            borderRadius: `${borderRadius}px`,
            padding: buttonSize === 'small' ? '4px 8px' : buttonSize === 'large' ? '12px 24px' : '8px 16px',
            fontSize: buttonSize === 'small' ? '0.8rem' : buttonSize === 'large' ? '1.25rem' : '1rem',
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default FigureGenerator;
