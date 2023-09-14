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

// const pages = ["Home", "Explore", "Book Now", "Contact", "Register", "Login"];

const pages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/ExploreScreen" },
  { label: "Book Now", route: "/CheckoutScreen" },
  { label: "Contact", route: "/contact_us" },
  { label: "Register", route: "/Register" },
  { label: "Login", route: "/Login" },
];

const DrawerComponent = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigationToScreens = (route: string) => {
    router.push(route);
  };

// const navigationToExploreScreen = (id: string) => {
//   if (id === "Explore") {
//     router.push("/ExploreScreen");
//   } else if (id === "Book Now") {
//     router.push("/CheckoutScreen");
//   } else {
//     router.push("/");
//   }
// };
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
                  primary={page.label} // Use primary prop to set the text content
                  onClick={() => navigationToScreens(page.route)}
                ></ListItemText>
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
