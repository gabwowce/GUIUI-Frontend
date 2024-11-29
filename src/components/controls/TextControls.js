import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { renderControl } from '../controls/renderControl'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateControl } from '../../redux/controlers/controlActions'; 

const TextControls = ({ componentId, controlsConfig }) => {
  const dispatch = useDispatch();
  const componentState = useSelector((state) => state.controls.components[componentId].css || {});
  const btnContent = useSelector((state)=> state.controls.components.button.text)

const handleChange = (controlName, value) => {
  console.log(`Control ${controlName} changed to:`, value); // Debugging: Check control name and value
  dispatch(updateControl(componentId, controlName, value));
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
            control.type === 'text' ? btnContent : componentState[control.valueOf] 
          )}
        </div>
      ))}
    </CardContent>
  </Card>
);
};

export default TextControls;
