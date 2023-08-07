// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Set your primary color
    },
    secondary: {
      main: '#fca311', // Set your secondary color
    },
    // Add more colors as needed
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Set your preferred font family
    fontSize: 16, // Set your preferred default font size
    // You can also override other typography styles like fontWeight, lineHeight, etc.
  },
  spacing: 8, // Set your preferred spacing unit
  // Add more custom theme properties as needed
});

export default theme;
