"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import DrawerComponent from "./DrawerComponent";
import Link from "next/link";
import { useRouter } from "next/navigation";


const pages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/ExploreScreen" },
  { label: "Book Now", route: "/CheckoutScreen" },
  { label: "Contact", route: "/ContactScreen" },
];

const NavBar = () => {
  const [value, setValue] = React.useState("one");
  const router = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigationToScreens = (route: string) => {
    router.push(route);
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
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Image src={logo} width={142} height={50} alt="logo" />
            </Box>

            {isMatch ? (
              <>
                <Image src={logo} width={142} height={50} alt="logo" />
                <DrawerComponent />
              </>
            ) : (
              <>
                  <Tabs
                    sx={{ marginLeft: "auto" }}
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                    TabIndicatorProps={{
                      style: { backgroundColor: "#FFF" },
                    }}
                  >
                    {pages.map((page, index) => (
                      <Tab
                        key={index}
                        label={page.label}
                        onClick={() => navigationToScreens(page.route)}
                      />
                    ))}
                  </Tabs>

                <Button
                  variant="text"
                  sx={{
                    color: "#FFF",
                    textTransform: "none",
                    margin: "5px",
                    fontSize: "16px",
                    marginLeft: "auto",
                  }}
                >
                  Register
                </Button>
                <Button
                  variant="contained"
                  sx={{
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
                  }}
                >
                  Login
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
