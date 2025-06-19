// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',         // black
      light: '#333333',        // dark gray
      dark: '#000000',         // full black
      contrastText: '#ffffff', // white text on black
    },
    secondary: {
      main: '#9e9e9e',         // gray 500
      light: '#e0e0e0',        // gray 300
      dark: '#616161',         // gray 700
      contrastText: '#000000', // black text on gray
    },
    background: {
      default: '#121212',      // dark background
      paper: '#1e1e1e',        // card background
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
       typography: {
       fontFamily: `'Work Sans', sans-serif`,
  },
    breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
