import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Users", icon: <PeopleIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleCollapseToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          position: "absolute",
          top: 10,
          left: 10,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: collapse ? 60 : 240,
            transition: "width 0.5s",
          },
        }}
      >
        <List>
          <ListItem
            button
            onClick={handleCollapseToggle}
            sx={{
              justifyContent: "flex-end",
            }}
          >
            {collapse ? <MenuIcon /> : <ListItemText primary="Collapse" />}
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {!collapse && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
