// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primaryWhite: {
      main: "#FFFFFF", // Set your primary color
    },
    secondaryWhite: {
      main: "rgba(255, 255, 255, 0.70)", // Set your secondary color
    },
    primaryBlack: {
      main: "#0C111F", // Set your secondary color
    },
    // Add more colors as needed
  },
  typography: {
    // fontFamily: "Arial, sans-serif", // Set your preferred font family
    fontSize: 16, // Set your preferred default font size
    // You can also override other typography styles like fontWeight, lineHeight, etc.
  },
  spacing: 8,
  // Set your preferred spacing unit
  // Add more custom theme properties as needed
});

export default theme;
