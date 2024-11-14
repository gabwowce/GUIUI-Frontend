import { createTheme } from '@mui/material/styles';

// Tamsios temos spalvų nustatymai
export const darkPalette = {
  primary: {
    main: '#90caf9', // Pavyzdžiui, šviesiai mėlyna spalva
  },
  secondary: {
    main: '#f48fb1', // Pavyzdžiui, šviesiai rožinė spalva
  },
  background: {
    default: '#121212', // Tamsi fono spalva
  },
  text: {
    primary: '#ffffff', // Šviesus tekstas
  },
};

// Sukuriame tamsią temą pagal spalvas
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
});
