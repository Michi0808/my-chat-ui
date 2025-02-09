import { Drawer, IconButton, Typography, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: {
    id: number;
    client: string;
    email: string;
    date: string;
    status: string;
    country: string;
    total: string;
  } | null;
};

const statusColors = {
  Delivered: "success",
  Canceled: "error",
  Pending: "warning",
} as const;

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
      {/* Header with close button */}
      <div className="flex justify-between items-center">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Order Details</Typography>
        <IconButton onClick={onClose} sx={{ color: "#ffffff", "&:hover": { color: "#a855f7" } }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </div>

      {/* Display selected order details */}
      {selectedItem ? (
        <div className="mt-4 space-y-3">
          <Typography variant="body1">
            <strong>Order:</strong> #{selectedItem.id}
          </Typography>
          <Typography variant="body1">
            <strong>Client:</strong> {selectedItem.client}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {selectedItem.email}
          </Typography>
          <Typography variant="body1">
            <strong>Date:</strong> {selectedItem.date}
          </Typography>
          <Typography variant="body1">
            <strong>Status:</strong>{" "}
            <Chip
              label={selectedItem.status}
              color={statusColors[selectedItem.status as keyof typeof statusColors]}
            />
          </Typography>
          <Typography variant="body1">
            <strong>Country:</strong> {selectedItem.country}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            <strong>Total:</strong> {selectedItem.total}
          </Typography>
        </div>
      ) : (
        <Typography variant="body1" className="text-gray-500 mt-4">
          Select an order from the list.
        </Typography>
      )}
    </Drawer>
  );
};

export default Sidebar;
