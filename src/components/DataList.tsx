import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, TextField, Button, IconButton, Typography, Chip, InputAdornment 
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

const dummyData = [
  { id: 1532, client: "John Carter", email: "hello@johncarter.com", date: "Jan 30, 2024", status: "Delivered", country: "United States", total: "$1,099.24" },
  { id: 1531, client: "Sophie Moore", email: "contact@sophiemoore.com", date: "Jan 27, 2024", status: "Canceled", country: "United Kingdom", total: "$5,870.32" },
  { id: 1530, client: "Matt Cannon", email: "info@mattcannon.com", date: "Jan 24, 2024", status: "Delivered", country: "Australia", total: "$13,899.48" },
  { id: 1529, client: "Graham Hills", email: "hi@grahamhills.com", date: "Jan 21, 2024", status: "Pending", country: "India", total: "$1,569.12" },
  { id: 1528, client: "Sandy Houston", email: "contact@sandyhouston.com", date: "Jan 18, 2024", status: "Delivered", country: "Canada", total: "$899.16" },
  { id: 1527, client: "Andy Smith", email: "hello@andysmith.com", date: "Jan 15, 2024", status: "Pending", country: "United States", total: "$2,449.64" },
];

const statusColors = {
  Delivered: "success",
  Canceled: "error",
  Pending: "warning",
} as const;

const DataList = () => {
  const [search, setSearch] = useState("");

  return (
    <div 
      className="p-4 bg-gray-900 text-white"
      style={{
        marginLeft: "200px", // Shift to the right
        width: "calc(100% - 300px)", // Ensure responsiveness
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h5" className="text-white font-bold">
          Orders Status
        </Typography>
        <div className="flex gap-2">
          <TextField 
            variant="outlined" 
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-400" />
                </InputAdornment>
              ),
              style: {
                backgroundColor: "#1e1e2f", // Dark theme background
                color: "white", // White text
                borderRadius: "8px", // Rounded corners
                border: "1px solid #444", // Subtle border
              },
            }}
          />
          <Button variant="contained" color="secondary">
            Create Order
          </Button>
        </div>
      </div>

      {/* Orders Table */}
      <TableContainer component={Paper} className="bg-gray-800">
        <Table>
          <TableHead 
            sx={{
              backgroundColor: "#1a1a2e", // Darker background for header
            }}
          >
            <TableRow>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Order</TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Client</TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Country</TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Total</TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData
              .filter((row) => row.client.toLowerCase().includes(search.toLowerCase()))
              .map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#1e1e2f" : "#2a2a3c", // Keep alternating row colors
                    "&:hover": { backgroundColor: "#333347" }, // Hover effect
                  }}
                >
                  <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>#{row.id}</TableCell>
                  <TableCell sx={{ color: "#ffffff" }}>
                    <div>
                      <Typography variant="body1" sx={{ color: "#ffffff", fontWeight: "bold" }}>
                        {row.client}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#c0c0c0" }}>
                        {row.email}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#ffffff" }}>{row.date}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={statusColors[row.status as keyof typeof statusColors]} />
                  </TableCell>
                  <TableCell sx={{ color: "#ffffff" }}>{row.country}</TableCell>
                  <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>{row.total}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon sx={{ color: "#c0c0c0" }} />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{ color: "#ff6666" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataList;
