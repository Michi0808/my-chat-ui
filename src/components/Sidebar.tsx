import { Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: { id: number; name: string; description: string } | null;
};

const Sidebar = ({ isOpen, onClose, selectedItem }: SidebarProps) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#1e1e2f", // Dark theme background
          color: "#ffffff", // Text color
          width: "320px", // Sidebar width
          padding: "20px", // Padding inside the sidebar
          boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.2)", // Smooth shadow for depth
        },
      }}
    >
      <div className="flex justify-between items-center">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Details</Typography>
        <IconButton onClick={onClose} sx={{ color: "#ffffff", "&:hover": { color: "#a855f7" } }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </div>
      {selectedItem ? (
        <div className="mt-4">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>{selectedItem.name}</Typography>
          <Typography variant="body1" className="text-gray-400 mt-2">
            {selectedItem.description}
          </Typography>
        </div>
      ) : (
        <Typography variant="body1" className="text-gray-500 mt-4">
          Select an item from the list.
        </Typography>
      )}
    </Drawer>
  );
};

export default Sidebar;
