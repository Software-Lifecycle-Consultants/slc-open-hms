"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logo from "../public/images/logo.png";
import {
  loginButtonStyles,
  logoBox,
  navBarRoot,
  registerButtonStyles,
} from "../styles/Theme";

const pages = ["Home", "About", "Destination", "Contact", "Test"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={navBarRoot}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={logoBox}>
            <Image src={logo} width={142} height={50} alt="logo" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                marginRight: "auto", // Pushes the menu to the left corner
              }}
            >
              {/* Hamburger menu for mobile view */}
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  marginLeft: "10px", // Adjust the margin for better spacing
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button variant="text" sx={registerButtonStyles}>
                Register
              </Button>
              <Button variant="contained" sx={loginButtonStyles}>
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

