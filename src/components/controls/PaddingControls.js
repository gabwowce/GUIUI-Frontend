import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { renderControl } from '../controls/renderControl'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateControl, removeControl } from '../../redux/controlers/controlActions'; 

const PaddingControls = ({ componentId, controlsConfig }) => {
  const dispatch = useDispatch();
  const componentState = useSelector((state) => state.controls.components[componentId].css || {});

  const handleChange = (controlName, value) => {
    console.log(`Control ${controlName} changed to:`, value);
    dispatch(updateControl(componentId, controlName, value));
  };
  

  return (
    <Card sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        
        {controlsConfig.map((control, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            {/* <Typography variant="body2" gutterBottom>{control.label}</Typography> */}
            {renderControl(
              control, 
              handleChange, 
              componentState[control.valueOf]?.value  // Tinkamai perduodame dabartinę reikšmę
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PaddingControls;
