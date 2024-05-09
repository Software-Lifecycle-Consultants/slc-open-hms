"use client"
import {
  AppBar,
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AdminDrawerComponent from '@/components/homePage/AdminDrawerComponent';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminNavBar: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const router = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigationToScreens = (route: string) => {
    router.push(route);
  };

  const navigationToRegisterPage = () => {
    router.push("/register");
  };

  const navigationToLoginPage = () => {
    router.push("/login");
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#4A5472", paddingTop: "20px" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* Replace this with your logo */}
              <img src="/images/admin/profileLogo.png" alt="logo" style={{ width: "50px", height: "auto" }} />
            </Box>
            {isMatch ? (
              <>
                <img src="/images/admin/profileLogo.png" alt="logo" style={{ width: "50px", height: "auto" }} />
                {/* Replace DrawerComponent with your drawer component */}
                <AdminDrawerComponent />
              </>
            ) : (
              <>
                <Tabs sx={{ margin: "auto" }} value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" TabIndicatorProps={{
    style: {
      backgroundColor: "#FFFFFF", // Set the indicator color to white
    },
 }}>
                  {/* Replace the label and route with your menu items */}
                  <Tab label="Dashboard" onClick={() => navigationToScreens("/abc")}  />
                  <Tab label="Items" onClick={() => navigationToScreens("/cde")} />
                  <Tab label="Blog" onClick={() => navigationToScreens("/xyz")} />
                  <Tab label="Contact Us" onClick={() => navigationToScreens("/xyz")} />
                </Tabs>
                <Button variant="text" onClick={navigationToRegisterPage} sx={{ color: "#FFF", textTransform: "none", margin: "5px" }}>
                <SettingsIcon sx={{ width: 35, height: 35 }}/>
                </Button>

                <Button variant="text" onClick={navigationToLoginPage} sx={{ color: "#FFF", textTransform: "none", margin: "5px" }}>
                <LogoutIcon sx={{ width: 35, height: 35 }}/>
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AdminNavBar;
