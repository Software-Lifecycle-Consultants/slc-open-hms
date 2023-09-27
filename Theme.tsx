"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#FF4081",
    },
  },
  typography: {
    fontFamily: '__Inter_e66fe9',
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