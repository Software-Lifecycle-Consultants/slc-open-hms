// Import necessary modules
"use client";
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a Material-UI theme
const lightTheme = createTheme({
  // Define the color palette for the theme
  palette: {
    mode: 'light', // Set the mode to light
    primary: {
      main: '#C7923E', // Set the primary color
    },
    secondary: {
      main: '#FFFFFF', // Set the secondary color
    },
    error: {
      main: '#E83B3B', // Set the error color
    },
    success: {
      main: '#52AA44', // Set the success color
    },
    background: {
      default: '#FFFFFF', // Set the default background color
    },
    text: {
      primary: '#353535', // Set the primary text color
      secondary: grey[500], // Set the secondary text color
    },
  },
  // Define typography settings for the theme
  typography: {
    fontFamily: 'Lora, sans-serif', // Set the default font family
    h1: {  // Define the h1 typography settings
      fontSize: '5rem',
      fontWeight: 700,
      fontFamily: 'Lora',
      color: '#0C111F',
      fontstyle: 'normal',
      letterSpacing: '-0.03rem'
    },
    h2: { // Define the h2 typography settings
      fontSize: '3rem',
      fontWeight: 700,
      fontFamily: 'Lora',
      color: '#0C111F',
    },
    h3: { // Define the h3 typography settings
      fontFamily: 'Mulish',
      fontSize: '1.125rem',
      fontWeight: 200,
      letterSpacing: '0.02rem',
      color: '#353535',
      lineHeight: '1.75rem',
      fontStyle: 'normal',
    },
    h4: { // Define the h4 typography settings
      fontSize: '1rem',
      lineHeight: '2rem',
    },
    h5: { // Define the h5 typography settings
      fontSize: '0.875rem',
      fontWeight: 700,
      fontFamily: 'Lora',
      letterSpacing: '-0.01rem',
      color: '#0C111F',
      textTransform: 'capitalize',
      lineHeight: '1.75 rem',
      fontStyle: 'normal',
    },
    h6: { // Define the h6 typography settings
      fontSize: '0.75rem',
    },
    body1: { // Define the body1 typography settings
      color: '#0C111F',
      fontSize: '1.5rem',
      fontWeight: 700,
      fontFamily: 'Lora',
      lineHeight: '2.25rem',
      letterSpacing: '0.01rem',
      fontStyle: 'normal',

    },
    body2: { // Define the body2 typography settings
      color: '#353535',
      fontSize: '1.125rem',
      lineHeight: '2.25rem',
      fontWeight: 200,
      fontFamily: 'Mulish',
      fontStyle: 'normal',
      letterSpacing: '-0.01rem',
    },
    button: { // Define the button typography settings
      textTransform: 'capitalize',
      fontWeight: 600,
      color: '#C7923E',
      fontFamily: 'Mulish',
      fontSize: '1rem',
    },
  },
  // Define component styles for the theme
  components: {
    MuiButton: { // Define the button component styles
      styleOverrides: { // Override the default styles
        root: {
          borderRadius: '0.5rem', // Set the border radius
        },
      },
    },
    MuiTab: { 
      styleOverrides: { 
        root: {          
          color: '#FFFFFF', 
          '&.Mui-selected': {
            color: '#FFFFFF', 
          },          
        },
        
      },      
    },    
  },
},
);

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to dark
    primary: {
      main: '#C7923E',
    },
    secondary: {
      main: '#4A5472',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: grey[500],
    },
  },
  typography: {
    fontFamily: 'Lora, sans-serif',
    h1: {
      fontSize: '20rem',
      fontWeight: 700,
      fontWeightBold: 400,
      fontFamily: 'Lora',

    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
      fontFamily: 'Lora',
    },
    h3: {
      fontFamily: 'Lora',
    },
    h5: {
      fontFamily: 'Mulish',
    },
    body1: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: 'Mulish',
    },
    button: {
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
        },
      },
    },
  },
},
);

export { lightTheme, darkTheme };
