import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { renderControl } from '../controls/renderControl';
import { textControls } from '../../config/controls';

const TextControls = ({ handleChange }) => {
  return (
    <Card sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Text Controls
        </Typography>
        {textControls.map((control, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Typography variant="body2" gutterBottom>{control.label}</Typography>
            {renderControl(control, handleChange)}  {/* Naudojame renderControl funkciją */}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TextControls;