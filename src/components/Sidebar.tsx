import { Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: { id: number; name: string; description: string } | null;
};

const Sidebar = ({ isOpen, onClose, selectedItem }: SidebarProps) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div className="w-80 p-4">
        <div className="flex justify-between items-center">
          <Typography variant="h6">Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {selectedItem ? (
          <div className="mt-4">
            <Typography variant="h5">{selectedItem.name}</Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              {selectedItem.description}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1" className="text-gray-500 mt-4">
            Select an item from the list.
          </Typography>
        )}
      </div>
    </Drawer>
  );
};

export default Sidebar;
