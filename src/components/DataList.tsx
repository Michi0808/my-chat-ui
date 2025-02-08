import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const dummyData = [
  { id: 1, name: "Item 1", description: "Description of item 1" },
  { id: 2, name: "Item 2", description: "Description of item 2" },
  { id: 3, name: "Item 3", description: "Description of item 3" },
  { id: 4, name: "Item 4", description: "Description of item 4" },
  { id: 5, name: "Item 5", description: "Description of item 5" },
  { id: 6, name: "Item 6", description: "Description of item 6" },
  { id: 7, name: "Item 7", description: "Description of item 7" },
  { id: 8, name: "Item 8", description: "Description of item 8" },
];

const DataList = () => {
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    name: string;
    description: string;
  } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (item: { id: number; name: string; description: string }) => {
    setSelectedItem(item);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className="flex flex-col"
      style={{
        maxWidth: "2000px", // Ensure the container does not exceed a maximum width
        width: "170%", // Force width expansion
        paddingLeft: "0px", // Add padding to shift left
        paddingRight: "70px", // Extra padding to push content slightly left
        maxHeight: "80vh", // Limit vertical scrolling
        overflowY: "auto", // Ensure vertical scrolling is enabled
        overflowX: "hidden",
      }}
    >
      {/* Wrapper div to control Card width */}
      <div className="w-full flex flex-col">
        {dummyData.map((item) => (
          <Card
            key={item.id}
            className="mb-4 cursor-pointer transition w-full"
            onClick={() => handleItemClick(item)}
            sx={{
              width: "100%",
              maxWidth: "1000px", // Set a reasonable maximum width for cards
              backgroundColor: "#1e1e2f",
              color: "#fff",
              borderRadius: "10px",
              padding: "12px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="gray">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} selectedItem={selectedItem} />
    </div>
  );
};

export default DataList;
