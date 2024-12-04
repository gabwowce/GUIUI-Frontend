import React from 'react';
import { TextField, Select, MenuItem, Slider, Switch, RadioGroup, FormControlLabel, Radio,Typography  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

export const renderControl = (control, handleChange, currentValue) => {
  switch (control.component) {
    case 'TextField':
      return (
        <>
         <Typography variant="body" gutterBottom>
          {control.label.charAt(0).toUpperCase() + control.label.slice(1)} 
        </Typography>
        <TextField
          label={control.label}
          variant="outlined"
          value={currentValue || ''} 
          onChange={(e) => handleChange(control.valueOf, e.target.value)} 
          {...control.props}
        />
        </>
       
      );
    case 'Select':
      return (
       <>
        <Typography variant="body" gutterBottom>
        {control.label.charAt(0).toUpperCase() + control.label.slice(1)} 
        </Typography>
        <Select
          label={control.label}
          value={currentValue || ''} 
          onChange={(e) => handleChange(control.valueOf, e.target.value)} 
          {...control.props}
        >
          {control.options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
       </>
       
      );
      case 'Slider':
        return (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="body" gutterBottom>
            {control.label.charAt(0).toUpperCase() + control.label.slice(1)} 
        </Typography>
            <Slider
              value={currentValue || 0} 
              min={control.props.min || 0} 
              max={control.props.max || 50} 
              onChange={(e, value) => handleChange(control.valueOf, value)}
              {...control.props} 
            />

            <StyledTextField
              value={currentValue || 0} 
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                if (!isNaN(newValue)) {
                  handleChange(control.valueOf, newValue); 
                }
              }}
              type="number"
              inputProps={{ min: control.props.min || 0, max: control.props.max || 50 }}
              style={{ marginTop: 10 }}
            />
          </div>
        );
    case 'Switch':
      return (
        <>
        
        <Typography variant="body" gutterBottom>
        {control.label.charAt(0).toUpperCase() + control.label.slice(1)} 
        </Typography>
        <Switch
          checked={currentValue || false} 
          onChange={(e) => handleChange(control.valueOf, e.target.checked)} 
          {...control.props}
        />
        </>
       
      );
    default:
      return null;
  }
};

const StyledTextField = styled(TextField)(({ theme }) => ({

  marginLeft: '10px',             // Adds space between the slider and the input
  width: '80px',                 // Sets a fixed width for the input
  '& .MuiInputBase-input': {
    padding: '0',               // Override padding to 0
  },
  '& .MuiOutlinedInput-notchedOutline': {
    
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
   
    
  },
  '& .MuiInputBase-input': {
    textAlign: 'left',         // Center-aligns the text inside the input
    fontSize: '16px',             // Adjust font size
    padding: '1px 5px',
  },
}));