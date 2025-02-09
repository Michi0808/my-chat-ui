import { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Logo from "../assets/Logo.png";

const SidebarMenu = () => {
  const [open, setOpen] = useState(true);

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
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        {open && <Typography variant="h6" className="text-xl font-bold">My Dashboard</Typography>}
      </div>

      {/* Menu List */}
      <List>
        <ListItem component="li" button>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem component="li" button>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Settings" />}
        </ListItem>
        <ListItem component="li" button>
          <ListItemIcon>
            <PersonIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Profile" />}
        </ListItem>
        <ListItem component="li" button>
          <ListItemIcon>
            <LockIcon sx={{ color: "#a855f7" }} />
          </ListItemIcon>
          {open && <ListItemText primary="Authentication" />}
        </ListItem>
      </List>
    </div>
  );
};

export default SidebarMenu;
