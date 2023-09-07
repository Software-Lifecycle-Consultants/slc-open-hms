"use client";
import {
  List,
  ListItemButton,
  ListItemIcon,
  Drawer,
  ListItemText,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const pages = ["Home", "Explore", "Book Now", "Contact", "Register", "Login"];

const DrawerComponent = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

const navigationToExploreScreen = (id: string) => {
  if (id === "Explore") {
    router.push("/ExploreScreen");
  } else if (id === "Book Now") {
    router.push("/CheckoutScreen");
  } else {
    router.push("/");
  }
};
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0C111F",
            width: { xs: "150px", sm: "168px" },
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText
                  sx={{ color: "#FFF" }}
                  onClick={(e) => navigationToExploreScreen(page)}
                  >
                  {page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#FFF", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
