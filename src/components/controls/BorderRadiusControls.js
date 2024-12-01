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

    if(value === 0){
      if(empty?.componentState[controlName]){
        dispatch(removeControl(componentId, controlName));
      }else{
        return
      }
    }else{
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
              componentState[control.valueOf]  // Tinkamai perduodame dabartinę reikšmę
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default BorderRadiusControls;
