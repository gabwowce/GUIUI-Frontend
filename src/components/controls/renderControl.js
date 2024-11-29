import React from 'react';
import { TextField, Select, MenuItem, Slider, Switch, RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

export const renderControl = (control, handleChange, currentValue) => {
  switch (control.component) {
    case 'TextField':
      return (
        <TextField
          label={control.label}
          variant="outlined"
          value={currentValue || ''} // Užtikriname, kad būtų rodoma tuščia reikšmė, jei currentValue yra undefined
          onChange={(e) => handleChange(control.valueOf, e.target.value)} // Pakeista: control.name vietoje control.valueOf
          {...control.props}
        />
      );
    case 'Select':
      return (
        <Select
          label={control.label}
          value={currentValue || ''} // Užtikriname, kad būtų rodoma tuščia reikšmė, jei currentValue yra undefined
          onChange={(e) => handleChange(control.valueOf, e.target.value)} // Pakeista: control.name vietoje control.valueOf
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
          value={currentValue || 0} // Užtikriname, kad būtų rodoma numatytoji reikšmė, jei currentValue yra undefined
          onChange={(e, value) => handleChange(control.valueOf, value)} // Pakeista: control.name vietoje control.valueOf
          {...control.props}
        />
      );
    case 'Switch':
      return (
        <Switch
          checked={currentValue || false} // Užtikriname, kad būtų rodoma numatytoji reikšmė, jei currentValue yra undefined
          onChange={(e) => handleChange(control.valueOf, e.target.checked)} // Pakeista: control.name vietoje control.valueOf
          {...control.props}
        />
      );
    default:
      return null;
  }
};
