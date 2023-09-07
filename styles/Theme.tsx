import { createTheme } from '@mui/material/styles';
import { purple, orange } from '@mui/material/colors';

const theme = createTheme({
});

export default theme;


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