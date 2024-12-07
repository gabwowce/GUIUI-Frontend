import React from 'react';
import { TextField, Select, MenuItem, Slider, Switch, RadioGroup, FormControlLabel, Radio,Typography, Box, FormControl, InputLabel  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

export const renderControl = (control, handleChange, currentValue) => {
  switch (control.component) {
    case 'TextField':
      return (
        <StyledTextFieldBox>
          {/* <Typography variant="body" gutterBottom>
            {control.label.charAt(0).toUpperCase() + control.label.slice(1)} 
          </Typography> */}
          <TextField
            label={control.label}
            variant="outlined"
            value={currentValue || ''} 
            onChange={(e) => handleChange(control.valueOf, e.target.value)} 
            {...control.props}
          />
        </StyledTextFieldBox>
       
      );
      case 'Select':
        return (
          <>
            <FormControl fullWidth>
              <InputLabel>{control.label}</InputLabel>
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
            </FormControl>
          </>
        );
      case 'Slider':
        return (
          <StyledTextFieldBox>
            <SmallTypography variant="body">
                {control.label.charAt(0).toUpperCase() + control.label.slice(1)} 
            </SmallTypography>
            <StyledBox>
              <Slider
                value={currentValue} 
                min={control.props.min} 
                max={control.props.max} 
                onChange={(e, value) => handleChange(control.valueOf, value)}
                {...control.props} 
              />

              <StyledValue
                value={currentValue || 0} 
                onChange={(e) => {
                  const newValue = parseInt(e.target.value, 10);
                  if (!isNaN(newValue)) {
                    handleChange(control.valueOf, newValue); 
                  }
                }}
                type="number"
              />
            
            </StyledBox>
          </StyledTextFieldBox>
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

    case 'ColorPicker':
      return (
        <StyledTextFieldBox>
          <Box display="flex" gap="10px">
            <TextField
              label={control.label}
              variant="outlined"
              value={currentValue || ''} 
              onChange={(e) => handleChange(control.valueOf, e.target.value)} 
              {...control.props}
              sx={{
                flex: 3, 
                '& .MuiOutlinedInput-root': {
                  height: '100%',       
                },
                // '& .MuiInputBase-input': {           
                //   padding: '10px',
                // },
              }}
            />
            <TextField
              value={currentValue || ''}
              onChange={(e) => handleChange(control.valueOf, e.target.value)} 
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                flex: 2, 
                '& .MuiOutlinedInput-root': {
                  height: '100%',        
                },
                // '& .MuiInputBase-input': {           
                //   padding: '10px',
                // },
              }}
            />
          </Box>
        </StyledTextFieldBox>
      );
    default:
      return null;
  }
};



const SmallTypography = styled(Typography)(({ theme }) => ({
  fontSize:'12px'
}));


const StyledBox = styled(Box)(({ theme }) => ({
  display:'flex',
  flexDirection:'row',
  gap:'10px'
}));


const StyledValue = styled(TextField)(({ theme }) => ({

  marginLeft: '10px',             
  width: '80px',                 
  '& .MuiInputBase-input': {
    padding: '0',               
  },
  '& .MuiOutlinedInput-notchedOutline': {
    
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
   
    
  },
  '& .MuiInputBase-input': {
    textAlign: 'left',         
    fontSize: '16px',             
    padding: '1px 5px',
  },
}));


const StyledTextFieldBox = styled(Box)(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
}));