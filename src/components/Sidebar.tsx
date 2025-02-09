import { Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: { id: number; client: string; date: string; status: string; country: string; total: string } | null;
};

// Dummy data for the chart
const data = [
  { date: "Jan 1", value: 100 },
  { date: "Jan 8", value: 200 },
  { date: "Jan 16", value: 150 },
  { date: "Jan 24", value: 300 },
  { date: "Feb 1", value: 250 },
  { date: "Feb 8", value: 280 },
  { date: "Feb 16", value: 260 },
  { date: "Feb 24", value: 220 },
];

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
          width: "350px", // Sidebar width
          padding: "20px", // Padding inside the sidebar
          boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.2)", // Smooth shadow for depth
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      {/* Details Section */}
      <div>
        <div className="flex justify-between items-center">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Details</Typography>
          <IconButton onClick={onClose} sx={{ color: "#ffffff", "&:hover": { color: "#a855f7" } }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>

        {selectedItem ? (
          <div className="mt-4">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Order ID: #{selectedItem.id}</Typography>
            <Typography variant="body1">Client: {selectedItem.client}</Typography>
            <Typography variant="body1">Date: {selectedItem.date}</Typography>
            <Typography variant="body1">Status: {selectedItem.status}</Typography>
            <Typography variant="body1">Country: {selectedItem.country}</Typography>
            <Typography variant="body1">Total: {selectedItem.total}</Typography>
          </div>
        ) : (
          <Typography variant="body1" className="text-gray-500 mt-4">
            Select an item from the list.
          </Typography>
        )}
      </div>

      {/* Line Chart Section */}
      <div className="mt-6">
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          Completed Tasks Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip contentStyle={{ backgroundColor: "#1e1e2f", color: "#ffffff" }} />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Drawer>
  );
};

export default Sidebar;
