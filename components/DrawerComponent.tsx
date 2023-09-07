import { List, ListItemButton, ListItemIcon,  Drawer, ListItemText, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About", "Destination", "Contact", "Register", "Login"];

const DrawerComponent = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0C111F",
            width: { xs:"150px", sm: "168px"},
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: "#FFF" }}>{page}</ListItemText>
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
}

export default DrawerComponent

