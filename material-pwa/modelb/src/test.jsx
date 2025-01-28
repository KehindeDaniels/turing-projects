import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  useMediaQuery,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = isSidebarOpen ? 240 : 72;

  const renderSidebar = () => (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? isSidebarOpen : true}
      onClose={() => setSidebarOpen(false)}
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {["Inbox", "Starred", "Send Email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            {isSidebarOpen && <ListItemText primary={text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  const renderDashboardContent = () => (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card {item}
                </Typography>
                <Typography color="text.secondary">
                  This is some content for card {item}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        {renderSidebar()}
        {renderDashboardContent()}
      </Box>
    </ThemeProvider>
  );
}

export default App;
