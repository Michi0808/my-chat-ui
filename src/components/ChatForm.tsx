import { useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatForm = () => {
  const [message, setMessage] = useState("");

  // Handle sending a message
  const handleSend = () => {
    console.log("Message sent:", message);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 flex justify-center">
      <Paper
        className="w-full max-w-3xl flex items-center px-4 py-2"
        elevation={3} // Add shadow for depth
        sx={{
          backgroundColor: "#1e1e2f",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          marginLeft: "100px", // Move the whole chat form to the right
        }}
      >
        {/* Input Field */}
        <TextField
          className="flex-1"
          variant="filled"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          InputProps={{
            style: {
              backgroundColor: "#2a2a3c", // Dark input background
              color: "#fff", // Text color
              borderRadius: "10px", // Rounded corners
            },
          }}
        />

        {/* Send Button with left margin */}
        <IconButton
          className="ml-2"
          onClick={handleSend}
          sx={{
            backgroundColor: "#8a2be2",
            color: "white",
            marginLeft: "10px", // Add left margin for spacing
            "&:hover": {
              backgroundColor: "#a855f7",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default ChatForm;
