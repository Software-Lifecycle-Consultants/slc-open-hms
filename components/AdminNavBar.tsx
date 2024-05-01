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
import DrawerComponent from '@/components/homePage/DrawerComponent';


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
        sx={{ backgroundColor: "#ccc", paddingTop: "20px" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* Replace this with your logo */}
              <img src="/images/logo.png" alt="logo" style={{ width: "100px", height: "auto" }} />
            </Box>
            {isMatch ? (
              <>
                <img src="/images/logo.png" alt="logo" style={{ width: "100px", height: "auto" }} />
                {/* Replace DrawerComponent with your drawer component */}
                <DrawerComponent />
              </>
            ) : (
              <>
                <Tabs sx={{ marginLeft: "auto" }} value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
                  {/* Replace the label and route with your menu items */}
                  <Tab label="ABC" onClick={() => navigationToScreens("/abc")} />
                  <Tab label="CDE" onClick={() => navigationToScreens("/cde")} />
                  <Tab label="XYZ" onClick={() => navigationToScreens("/xyz")} />
                </Tabs>
                <Button variant="text" onClick={navigationToRegisterPage} sx={{ color: "#FFF", textTransform: "none", margin: "5px", fontSize: "16px" }}>
                  Register
                </Button>
                <Button variant="contained" onClick={navigationToLoginPage} sx={{ width: "121px", height: "47px", padding: "10px 25px", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "100px", background: "#FFF", color: "#0D0E25", textTransform: "none", fontSize: "16px", fontWeight: "bold", marginLeft: "10px" }}>
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

export default AdminNavBar;
