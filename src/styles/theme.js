import { createTheme } from '@mui/material/styles';

// Tamsios temos spalvų nustatymai
export const darkPalette = {
  primary: {
    main: '#7B113A', 
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
    primary:'#473E41',
    primaryHover:'#544B4E',
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
        fontSize: '1rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.8rem',
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
        },
        toggle: {
          backgroundColor: 'transparent',
          color: darkPalette.text.primary,
          '&:hover': {
            backgroundColor: darkPalette.btn.primary,
          },
          '&:selected': {
            backgroundColor: darkPalette.btn.primary,
          },
        },
        primary: {
          backgroundColor: darkPalette.btn.primary,
          color: darkPalette.text.primary,
          '&:hover': {
            backgroundColor: darkPalette.btn.primaryHover,
          },
        },
        
      
      },
    },
  },
});
