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

export const titleStyle = {
  color: "#E97458",
  fontFamily: "Inter",
  textTransform: "uppercase",
  fontWeight: 700,
};

export const subtitleStyle = {
  color: "#FFF",
  fontFamily: "Volkhov",
  fontSize: "80px",
  fontWeight: 700,
  lineHeight: "100px",
  letterSpacing: "-3.2px",
};

export const descriptionStyle = {
  color: "rgba(255, 255, 255, 0.70)",
  fontFamily: "Inter, sans-serif",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "35px",
  letterSpacing: "-0.96px",
  width: "100%",
};

export const primaryButtonStyle = {
  display: "inline-flex",
  padding: "16px 24px",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px",
  borderRadius: "100px",
  textTransform: "none",
  fontWeight: "bold",
  color: "#0C111F",
  background: "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",
};

export const secondaryButtonStyle = {
  color: "#FFF",
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "180%",
  letterSpacing: "0.36px",
  margin: "5px",
  textTransform: "none",
};

export const loginButtonStyles = {
  width: "121px",
  height: "47px",
  padding: "10px 25px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "100px",
  background: "#FFF",
  color: "#0D0E25",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "bold",
  marginRight: "70px",
};

export const registerButtonStyles = {
  color: "#FFF",
  textTransform: "none",
  margin: "5px",
  fontSize: "16px",
};

export const navBarRoot = {
  backgroundColor: "#0C111F",
};

export const logoBox = {
  display: { xs: "none", md: "flex" },
  mr: 10,
  marginLeft: "70px",
};