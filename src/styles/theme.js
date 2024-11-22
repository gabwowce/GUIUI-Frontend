import { Padding } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

// Tamsios temos spalvų nustatymai
export const darkPalette = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2060, 
    },
  },
  primary: {
    main: '#fffff', 
  },
  secondary: {
    main: '#151515', // Pavyzdžiui, šviesiai rožinė spalva
  },
  background: {
    default: '#151515', // Tamsi fono spalva
  },
  text: {
    primary: '#EEEEEE', // Šviesus tekstas
    secondary: '151515' // Tamsus tekstas
  },
  btn:{
    primary:'rgba(71,62,65,0.3)',
    primaryHover:'rgba(84,75,78,0.5)',
  }
 
};

// Sukuriame tamsią temą pagal spalvas
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
  typography: {
    h1: {
      fontSize: '4.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '3.5rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '3rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '2.7rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.8rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.2rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.9rem',
      },
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.4rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1.3rem',
      },
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.95rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    subtitle2: {
      fontSize: '1.125rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.9rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.9rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    body2: {
      fontSize: '0.675rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.475rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.375rem',
      },
    },

  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize:'1rem'
        },
        text: {
          backgroundColor: 'transparent',
          color: darkPalette.text.primary,
          '&:hover': {
            backgroundColor: darkPalette.btn.primary,
          },
        },
        textLeft: {
          display: 'flex', 
          justifyContent: 'flex-start', 
          textAlign: 'left',
          backgroundColor: 'transparent',
          color: darkPalette.text.primary,
          '&:hover': {
            backgroundColor: darkPalette.btn.primary,
          },
        },
        menuItem: {
          display: 'flex', 
          justifyContent: 'flex-start', 
          textAlign: 'left',
          backgroundColor: darkPalette.btn.primary,
          color: darkPalette.text.primary,
          '&:hover': {
            backgroundColor: darkPalette.btn.primaryHover,
          },
        },
        outlined: {
         border:`1px solid ${darkPalette.text.primary}`,
         color: darkPalette.text.primary,
          '&:hover': {
            backgroundColor: darkPalette.btn.primaryHover,
          },
        },
      
      },
    },
  },
});
