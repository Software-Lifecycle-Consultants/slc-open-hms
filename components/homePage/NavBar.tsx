"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/homePage/navbarImages/logo.png";
import DrawerComponent from "./DrawerComponent";
import { useRouter } from "next/navigation";

/* Button labels for navigation */
const navBarButtons = {
  button1: "Register",
  button2: "Login",
}

/* Page routes and labels for navigation */
const pages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/ExploreScreen" },
  { label: "Book Now", route: "/CheckoutScreen" },
  { label: "Contact", route: "/contact_us" },
];

/* Styles for a text button */
const textButtonStyles = {
  color: "#FFF",
  textTransform: "none",
  margin: "5px",
  fontSize: "16px",
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "#c7833e",
  },
};

/* Styles for a contained button */
const containedButtonStyles = {
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
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "#c7833e",
  },
};

/*  Navbar component for the website header. */
const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  /* Handle tab change in the navbar */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(Number(newValue));
  };

  /* Navigate to specified route */
  const navigationToScreens = (route: string) => {
    router.push(route);
  };

  /* Navigate to the register page */
  const navigationToRegisterPage = () => {
    router.push("/Register");
  };

  /* Navigate to the login page */
  const navigationToLoginPage = () => {
    router.push("/Login");
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#0C111F",
          paddingTop: "20px",
        }}
      >
        {/* Container to hold the content and align it */}
        <Container>
          {/* Toolbar holds the content within the AppBar */}
          <Toolbar disableGutters>
            {/* Display the logo image on larger screens */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Image src={logo} width={142} height={50} alt="logo" />
            </Box>

            {/* Conditionally render either DrawerComponent or Tabs/Button based on screen size */}
            {isMatch ? (
              <>
                {/* Display the logo image and DrawerComponent on smaller screens */}
                <Image src={logo} width={142} height={50} alt="logo" />
                <DrawerComponent />
              </>
            ) : (
              <>
                {/* Display Tabs and Buttons on larger screens */}
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                  indicatorColor="secondary"
                  TabIndicatorProps={{
                    style: { backgroundColor: "#c7833e" },
                  }}
                >
                  {/* Map through pages to create Tabs for navigation */}
                  {pages.map((page, index) => (
                    <Tab
                      key={index}
                      label={page.label}
                      onClick={() => navigationToScreens(page.route)}
                    />
                  ))}
                </Tabs>
                {/* Button for Register */}
                <Button
                  variant="text"
                  onClick={navigationToRegisterPage}
                  sx={textButtonStyles}
                >
                  {navBarButtons.button1}
                </Button>
                {/* Button for Login */}
                <Button
                  variant="contained"
                  onClick={navigationToLoginPage}
                  sx={containedButtonStyles}
                >
                  {navBarButtons.button2}
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
