"use client";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import { useState } from "react";

export default function DrawerMobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <span className="material-symbols-rounded">menu</span>
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton sx={{ fontWeight: "lg" }} href="/hello">
            Hello
          </ListItemButton>
          <ListItemButton href="/about-us">About us</ListItemButton>
          <ListItemButton href="/our-services">Our Services</ListItemButton>
          <ListItemButton href="/recent-projects">Recent Projects</ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
