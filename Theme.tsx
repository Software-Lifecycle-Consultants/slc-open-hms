// Import necessary modules
"use client"
import { createTheme } from "@mui/material/styles";

// Create a Material-UI theme
const theme = createTheme({
  // Define the color palette for the theme
  palette: {
    primary: {
      main: "#1976D2", // Main color for primary elements
    },
    secondary: {
      main: "#FF4081", // Main color for secondary elements
    },
  },

  // Define typography settings for the theme
  typography: {
    fontFamily: "__Inter_e66fe9", // Define the font family for text
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // fontWeightBold: 700,
  },
});

export default theme;

// components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: 46,
//           fontWeight: 800,
//         }
//       },
//     },
//   },
