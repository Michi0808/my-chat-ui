import { useState } from "react";
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
    <div className="flex-1 overflow-y-auto p-4 bg-white border-t border-b">
      {dummyData.map((item) => (
        <div
          key={item.id}
          className="mb-2 p-3 bg-gray-100 rounded shadow cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleItemClick(item)}
        >
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} selectedItem={selectedItem} />
    </div>
  );
};

export default DataList;
