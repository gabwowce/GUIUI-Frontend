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
    console.log(`Control ${controlName} changed to:`, value); // Debugging: Check control name and value
    
    if (controlName === 'borderRadius') {
        const allCornersEqual = Object.values(componentState).every(val => val === value);
      
        if (allCornersEqual) {
          // Jei visi kampai vienodi, nustatome tik borderRadius
          dispatch(updateControl(componentId, 'borderRadius', value));
      
          // Pašaliname likusius kampus tik jei jie egzistuoja
          ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'].forEach(corner => {
            if (componentState[corner] !== undefined) {
              dispatch(removeControl(componentId, corner));
            }
          });
        } else {
          // Jei kampai skiriasi, įrašome kiekvieną atskirai
          dispatch(updateControl(componentId, 'borderTopLeftRadius', value));
          dispatch(updateControl(componentId, 'borderTopRightRadius', value));
          dispatch(updateControl(componentId, 'borderBottomLeftRadius', value));
          dispatch(updateControl(componentId, 'borderBottomRightRadius', value));
      
          // Pašaliname bendrą borderRadius tik jei jis egzistuoja
          if (componentState['borderRadius'] !== undefined) {
            dispatch(removeControl(componentId, 'borderRadius'));
          }
        }
      } else if (value === 1) {
        // Jei kampo reikšmė 0, pašaliname jį iš state tik jei jis egzistuoja
        if (componentState[controlName] !== undefined) {
          dispatch(removeControl(componentId, controlName));
        }
      } else {
        // Kita atnaujinimo logika
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
