import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Logo from "../assets/Logo.png"; // Import logo

const SidebarMenu = () => {
  const [open, setOpen] = useState(true);
  const [authOpen, setAuthOpen] = useState(false); // State for Authentication submenu

  return (
    <div
      className="h-screen bg-gray-900 text-white transition-all duration-300"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: open ? "300px" : "80px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px",
      }}
    >
      {/* Logo and title */}
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        {open && <Typography variant="h6" className="text-xl font-bold">My Dashboard</Typography>}
      </div>

      {/* Menu list */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Settings" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Profile" />}
        </ListItem>

        {/* Authentication Menu */}
        <ListItem button onClick={() => setAuthOpen(!authOpen)}>
          <ListItemIcon>
            <LockIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Authentication" />}
          {open && (authOpen ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>

        {/* Submenu: Login & Signup */}
        <Collapse in={authOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Login" sx={{ color: "#a855f7" }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Signup" sx={{ color: "#a855f7" }} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default SidebarMenu;
