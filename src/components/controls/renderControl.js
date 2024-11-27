import React from 'react';
import { TextField, Select, MenuItem, Slider, Switch, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const renderControl = (control, handleChange, getValue, currentValue) => {
    switch (control.component) {
      case 'TextField':
        return (
          <TextField
            label={control.label}
            variant="outlined"
            value={currentValue}
            onChange={(e) => handleChange(e, control.valueOf)}
            {...control.props}
          />
        );
      case 'Select':
        return (
          <Select
            label={control.label}
            value={currentValue}
            onChange={(e) => handleChange(e, control.valueOf)}
            {...control.props}
          >
            {control.options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      case 'Slider':
        return (
          <Slider
            value={currentValue}
            onChange={(e, value) => handleChange(value, control.valueOf)}
            {...control.props}
          />
        );
      case 'Switch':
        return (
          <Switch
            checked={currentValue}
            onChange={(e) => handleChange(e.target.checked, control.valueOf)}
            {...control.props}
          />
        );
      default:
        return null;
    }
  };