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
import { drawerPages } from "@/data/homePage";

/* DrawerComponent displays a drawer with navigation links. */
const DrawerComponent = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  /* Function to navigate to a specific route. */
  const navigationToScreens = (route: string) => {
    router.push(route);
  };

  return (
    <>
      {/* Drawer component for navigation */}
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
          {/* Mapping through pages to create navigation links */}
          {drawerPages.map((page, index) => (
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#c7833e", // Define your desired hover color
                },
              }}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{ color: "#FFF" }}
                  primary={page.label} // Use primary prop to set the text content
                  onClick={() => navigationToScreens(page.route)}
                ></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      {/* IconButton for opening the drawer */}
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
