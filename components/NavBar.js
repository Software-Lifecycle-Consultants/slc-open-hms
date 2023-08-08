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
import { loginButtonStyles, logoBox, navBarRoot, registerButtonStyles } from "../styles/theme";

const pages = ["Home", "About", "Destination", "Contact"]; 

const NavBar = () => {
     const [anchorElNav, setAnchorElNav] = React.useState(null);

     const handleOpenNavMenu = (event) => {
       setAnchorElNav(event.currentTarget);
     };

     const handleCloseNavMenu = () => {
       setAnchorElNav(null);
    };
    
  return (
    <div>
      <AppBar
        position="static"
              elevation={0}
              sx={navBarRoot}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={logoBox}>
              <Image src={logo} width={142} height={50} alt="logo" />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
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
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: { sm: "6%", md: "20%" },
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
                mr: 10,
              }}
            >
              <Image src={logo} width={142} height={50} alt="logo" />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                mr: 10,
              }}
            >
              <Button variant="text" sx={registerButtonStyles}>
                Register
              </Button>
              <Button variant="contained" sx={loginButtonStyles}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar
