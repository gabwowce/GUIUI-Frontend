import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { renderControl } from '../controls/renderControl'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateControl, removeControl } from '../../redux/controlers/controlActions'; 

const BorderRadiusControls = ({ componentId, controlsConfig }) => {
  const dispatch = useDispatch();
  const componentState = useSelector((state) => state.controls.components[componentId].css || {});

  // Funkcija, kuri atnaujina kampus
  const handleChange = (controlName, value) => {
    // Handle borderRadius property
    if (controlName === "borderRadius") {
      // If borderRadius is changed, update all four border radii
      const borderRadiusValues = {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      };
  
      // Update each of the border radius properties individually in state
      Object.keys(borderRadiusValues).forEach((key) => {
        dispatch(updateControl(componentId, key, borderRadiusValues[key], false));
      });
  
    } else if (controlName !== "borderRadius") {
      // For other border-specific changes, update that particular border radius only
      dispatch(updateControl(componentId, controlName, value));
    }
  
    // If value is 0, remove the specific control if it exists
    if (value === 0) {
      if (componentState[controlName]) {
        dispatch(removeControl(componentId, controlName));
      } else {
        return;
      }
    } else {
      // Otherwise update the control value
      dispatch(updateControl(componentId, controlName, value));
    }
  };

  return (
    <Card sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {componentId.charAt(0).toUpperCase() + componentId.slice(1)} Controls
        </Typography>
        {controlsConfig.map((control, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Typography variant="body2" gutterBottom>{control.label}</Typography>
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

export default BorderRadiusControls;
