import React from 'react';
import { TextField, Select, MenuItem, Slider, Switch, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const renderControl = (control, handleChange) => {
  switch (control.component) {
    case 'TextField':
      return (
        <TextField
          {...control.props}
          fullWidth
          onChange={(e) => handleChange(control.label, e.target.value)}
        />
      );
    case 'Select':
      return (
        <Select
          {...control.props}
          fullWidth
          onChange={(e) => handleChange(control.label, e.target.value)}
        >
          {control.options.map((option, idx) => (
            <MenuItem key={idx} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      );
    case 'Slider':
      return (
        <Slider
          {...control.props}
          fullWidth
          onChange={(e, newValue) => handleChange(control.label, newValue)}
        />
      );
    case 'Switch':
      return (
        <Switch
          {...control.props}
          onChange={(e) => handleChange(control.label, e.target.checked)}
        />
      );
    case 'RadioGroup': // Naujas atvejis
      return (
        <RadioGroup
          {...control.props}
          onChange={(e) => handleChange(control.label, e.target.value)}
        >
          {control.options.map((option, idx) => (
            <FormControlLabel
              key={idx}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      );
    default:
      return null;
  }
};
